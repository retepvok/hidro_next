"use client";

import { useState } from 'react';
import Image from 'next/image';
import './reference-card.scss';
import { getBaseUrl } from '../../utils/url';
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

export interface Reference {
    id: string | number;
    name: string;
    description?: string;
    thumbnail?: Image;
    price?: string;
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
    hasDescription?: boolean | null
}

export default function ReferenceCard({reference, className = "col-12", hasDescription = false}: ReferenceProps) {
    const [showGallery, setShowGallery] = useState(false);
    const [referenceDetail, setReferenceDetail] = useState<ReferenceDetail | null>(null);
    const [loading, setLoading] = useState(false);

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
                    <div className="image-wrapper"
                        {...(reference.price && {
                            'data-price': reference.price + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
                        })}
                    >
                        {reference.thumbnail && reference.thumbnail.picture && (
                            <Image
                                src={`${getBaseUrl()}${reference.thumbnail.picture.url}`}
                                alt={reference.name}
                                fill
                                sizes="(max-width: 576px) 100vw, (max-width: 768px) 150px, 200px"
                                style={{objectFit: 'cover'}}
                                priority
                            />
                        )}
                    </div>
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
