"use client";

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
                type: "video" as const,
                poster: image.picture.url.endsWith('.mp4') ? '' : fullUrl, // Use image as poster if available
                width: 1280, // Default width
                height: 720, // Default height
                sources: [
                    {
                        src: fullUrl,
                        type: image.picture.contentType || 'video/mp4', // Default to mp4 if not specified
                    },
                ],
                title: image.description || '',
            };
        }

        // Regular image slide
        return {
            src: fullUrl,
            title: image.description || '',
        };
    });

    return (
        <Lightbox
            open={true}
            close={onClose}
            index={initialIndex}
            slides={slides}
            plugins={[Thumbnails, Zoom, Captions, Video]}
            controller={{closeOnBackdropClick: true}}
            video={{
                autoPlay: false,
                controls: true,
                playsInline: true
            }}
            styles={{
                captionsTitleContainer: {
                    textAlign:"center",
                    marginTop:"10px"
                }
            }}

        />
    );
}
