'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  onClick?: () => void;
  className?: string;
}

const CustomImage = ({ src, alt, width, height, onClick, className }: Props) => {
  const [imageSrc, setImageSrc] = useState(src ?? '/images/mock/UserProfileSample1.png');

  const handleError = () => {
    setImageSrc('/images/mock/UserProfileSample1.png');
  };

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      onError={handleError}
    />
  );
};

export default CustomImage;
