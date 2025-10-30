import { Geist } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "CS359 - UK Tech & Culture",
  description: "UK Technology & Culture Trip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
