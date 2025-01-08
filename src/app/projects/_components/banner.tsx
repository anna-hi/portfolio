type bannerProps = {
  background: string;
  color: string;
  text: string;
};

export default function Banner({ background, color, text }: bannerProps) {
  return (
    <div
      className="flex items-center justify-center w-full h-80"
      style={{ background, color }}
    >
      <h3>{text}</h3>
    </div>
  );
}
