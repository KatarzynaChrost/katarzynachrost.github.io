import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Navigation from "./components/organisms/Navigation";
import Footer from "./components/organisms/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katarzyna Chróst Frontend Developer Portfolio",
  description: "Check out my portfolio, and let's work together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
