import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "Movies - MOVIE DB",
  description: "Generated by Movies - MOVIE DB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
