'use client';

import { useDropzone } from 'react-dropzone';

interface DragDropProps {
  onImageUpload: (files: File[]) => void;
  children: React.ReactNode;
}

export default function DragDrop({ onImageUpload, children }: DragDropProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    onDrop: onImageUpload,
    noClick: true,
    noDrag: false,
    multiple: false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
      {isDragActive && (
        <div className="absolute inset-0 z-50 bg-blue-500/10 flex items-center justify-center pointer-events-none">
          <p className="text-blue-500 text-lg">이미지를 여기에 놓으세요</p>
        </div>
      )}
    </div>
  );
}
