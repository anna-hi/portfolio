type bannerProps = {
  background: string;
  color?: string;
  text: string;
};

export default function Banner({
  background,
  color = "white",
  text,
}: bannerProps) {
  return (
    <div className="w-full pt-14 pb-9" style={{ background }}>
      <h3 className=" text-center text-container mb-0" style={{ color }}>
        {text}
      </h3>
    </div>
  );
}
