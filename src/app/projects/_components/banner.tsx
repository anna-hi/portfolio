type bannerProps = {
  background: string;
  children: React.ReactNode;
};

export default function Banner({ background, children }: bannerProps) {
  return (
    <div
      className="w-full py-together px-text text-center"
      style={{ background }}
    >
      {children}
    </div>
  );
}
