import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: () => void;
  className?: string;
}

const CustomImage = ({ src, alt, width, height, onClick, className }: Props) => {
  return <Image className={className} src={src} alt={alt} width={width} height={height} onClick={onClick} />;
};

export default CustomImage;
