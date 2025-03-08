import type { Metadata } from "next";
import { Unbounded as FontSans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "IAD GROUP 7",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <div className="max-w-full overflow-hidden webiste-wrapper">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-J76JN0QQC9" />
    </html>
  );
}
