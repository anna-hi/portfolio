import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
