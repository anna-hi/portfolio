import ImageViewer from "./image-viewer";

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

// TODO: DO THIS THING
export default function ImageCarousel({ images }: ImageCarouselProps) {
  const imagesLength = images.length;

  return (
    <div className="flex items-center justify-center">
      {images.map((image, index) => (
        <ImageViewer key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
