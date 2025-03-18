"use client";

import { useState } from 'react';
import './reference-card.scss';
import { getBaseUrl } from '../../utils/url';

interface ThumbnailPicture {
    id: string | number;
    documentId: string;
    url: string;
}

interface ReferenceProps {
    reference: {
        id: string | number;
        name: string;
        thumbnail_picture?: ThumbnailPicture;
    };
    className?: string;
}

export default function ReferenceCard({reference, className = "col-12"}: ReferenceProps) {
    // Function to get thumbnail image URL using the API URL
    const getThumImgUrl = () => {
        if (reference.thumbnail_picture && reference.thumbnail_picture.url) {
            return `url(${getBaseUrl()}${reference.thumbnail_picture.url})`;
        }
        return '';
    };

    return (
        <div className={className}>
            <h5>
                {reference.name}
            </h5>
            {/* Thumbnails section */}
            <div className="thumbnails-container">
                <div className="thumbnails">
                    <div style={{backgroundImage: getThumImgUrl()}}></div>
                </div>
            </div>

            {/* Bottom divider */}
            <div className="bb"></div>
        </div>
    );
}
