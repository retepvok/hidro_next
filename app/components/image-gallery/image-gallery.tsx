"use client";

import {useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import './image-gallery.css';
import {getBaseUrl} from '../../utils/url';

interface Picture {
    id: string | number;
    documentId: string;
    url: string;
    contentType?: string;
}

interface Image {
    id: number;
    picture: Picture;
    description?: string;
    is_video?: boolean;
    title?: string;
}

interface ImageGalleryProps {
    images: Image[];
    initialIndex?: number;
    onClose: () => void;
}

export default function ImageGallery({images, initialIndex = 0, onClose}: ImageGalleryProps) {
    const [index, setIndex] = useState(initialIndex);

    const slides = images.map(image => {
        // Handle case where image or image.picture might be undefined
        if (!image || !image.picture || !image.picture.url) {
            return {src: '', description: ''}; // Return empty src as fallback
        }

        const baseUrl = getBaseUrl();
        const fullUrl = `${baseUrl}${image.picture.url}`;

        // Check if this is a video
        if (image.is_video) {
            // Create a video slide
            return {
                type: 'video',
                poster: image.picture.url.endsWith('.mp4') ? '' : fullUrl, // Use image as poster if available
                width: 1280, // Default width
                height: 720, // Default height
                sources: [
                    {
                        src: fullUrl,
                        type: image.picture.contentType || 'video/mp4', // Default to mp4 if not specified
                    },
                ],
                description: image.description || '',
                title: image.title || '',
            };
        }

        // Regular image slide
        return {
            src: fullUrl,
            description: image.description || '',
            title: image.title || '',
        };
    });

    return (
        <Lightbox
            open={true}
            close={onClose}
            index={index}
            slides={slides}
            plugins={[Thumbnails, Zoom, Captions, Video]}
            captions={{
                descriptionTextAlign: "center",
                titleTextAlign: "center",
                overlayClassName: "custom-caption-overlay"
            }}
            controller={{closeOnBackdropClick: true}}
            video={{
                autoPlay: false,
                controls: true,
                playsInline: true
            }}
            styles={{
                caption: {
                    captionContainer: { 
                        position: "absolute", 
                        top: "0", 
                        bottom: "auto",
                        background: "rgba(0, 0, 0, 0.7)",
                        padding: "10px",
                        width: "100%",
                        zIndex: 10
                    }
                },
                container: {
                    padding: "60px 0 40px 0"
                },
                slide: {
                    padding: "40px 0 60px 0"
                }
            }}
        />
    );
}
