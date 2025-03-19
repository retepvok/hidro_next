"use client";

import {useState, useEffect} from 'react';
import './reference-card.scss';
import {getBaseUrl} from '../../utils/url';
import api from '../../services/api';
import dynamic from 'next/dynamic';

// Dynamically import the ImageGallery component to avoid SSR issues with the lightbox
const ImageGallery = dynamic(() => import('../image-gallery/image-gallery'), {
    ssr: false
});

interface Picture {
    id: string | number;
    documentId: string;
    url: string;
}

interface Image {
    id: number;
    picture: Picture;
}

interface Reference {
    id: string | number;
    name: string;
    description?: string;
    thumbnail?: Image;
}

interface ReferenceDetail {
    id: string | number;
    name: string;
    description?: string;
    images?: Image[]
}

interface ReferenceProps {
    reference: Reference;
    className?: string;
}

export default function ReferenceCard({reference, className = "col-12", hasDescription = false}: ReferenceProps) {
    const [showGallery, setShowGallery] = useState(false);
    const [referenceDetail, setReferenceDetail] = useState<ReferenceDetail | null>(null);
    const [loading, setLoading] = useState(false);

    // Function to get thumbnail image URL using the API URL
    const getThumImgUrl = () => {
        if (reference.thumbnail && reference.thumbnail.picture) {
            return `url(${getBaseUrl()}${reference.thumbnail.picture.url})`;
        }
        return '';
    };

    // Fetch reference details when gallery is opened
    const handleOpenGallery = async () => {
        if (!referenceDetail && !loading) {
            setLoading(true);
            try {
                const response = await api.get(`/api/references/${reference.id}`);
                setReferenceDetail(response.data.data);
            } catch (error) {
                console.error('Error fetching reference details:', error);
            } finally {
                setLoading(false);
            }
        }
        setShowGallery(true);
    };

    // Close the gallery
    const handleCloseGallery = () => {
        setShowGallery(false);
    };

    // Prepare images for gallery
    const getGalleryImages = () => {
        if (referenceDetail && referenceDetail.images && referenceDetail.images.length > 0) {
            return referenceDetail.images;
        }
        // Fallback to thumbnail if no images in detail
        return reference.thumbnail ? [reference.thumbnail] : [];
    };

    return (
        <div className={className}>
            <h5>
                {reference.name}
            </h5>
            {/* Thumbnails section */}
            <div className="thumbnails-container" onClick={handleOpenGallery}>
                <div className="thumbnails">
                    <div style={{backgroundImage: getThumImgUrl()}}></div>
                </div>
            </div>

            {/* Description section - always render the container for consistent height */}
            {hasDescription && (
                <div className="reference-description">
                    {reference.description ? (
                        <p>{reference.description}</p>
                    ) : (
                        <p className="invisible-placeholder">placeholder</p>
                    )}
                </div>
            )}

            {/* Bottom divider */}
            <div className="bb"></div>

            {/* Gallery modal */}
            {showGallery && getGalleryImages().length > 0 && (
                <ImageGallery
                    images={getGalleryImages()}
                    initialIndex={0}
                    onClose={handleCloseGallery}
                />
            )}
        </div>
    );
}
