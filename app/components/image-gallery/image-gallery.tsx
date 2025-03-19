"use client";

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { getBaseUrl } from '../../utils/url';



interface Picture {
  id: string | number;
  documentId: string;
  url: string;
}

interface Image{
  id: number;
  picture: Picture;
  description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageGallery({ images, initialIndex = 0, onClose }: ImageGalleryProps) {
  const [index, setIndex] = useState(initialIndex);

  const slides = images.map(image => {
    // Handle case where image or image.picture might be undefined
    if (!image || !image.picture || !image.picture.url) {
      return { src: '', description: '' }; // Return empty src as fallback
    }
    return {
      src: `${getBaseUrl()}${image.picture.url}`,
      description: image.description || '',
    };
  });

  return (
    <Lightbox
      open={true}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Thumbnails, Zoom]}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
