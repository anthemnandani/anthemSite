
import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';
import './assets/css/custom.css';
import './assets/css/style.min.css';
import '../styles/App.css'; 
import "./globals.css";
 import Header from "../partials/header/Header";
import Footer from "../components/FooterComponent/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anthem Infotech - Software Product Development & IT Solutions",
  description: "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide.",
  keywords: "Software Development, IT Solutions, Digital Transformation, Product Development, Anthem Infotech",
  authors: [
    { name: "Hemant Gupta - CEO, Anthem Infotech", url: "https://antheminfotech.com" }
  ],
  creator: "Hemant Gupta - CEO, Anthem Infotech",
  openGraph: {
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    url: "https://antheminfotech.com",
    siteName: "Anthem Infotech",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp", // logo URL
        width: 1200,
        height: 630,
        alt: "Anthem Infotech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnthemInfotech", // Twitter handle
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    images: [
      "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp" // logo URL
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer is global */}
        <Footer />
      </body>
    </html>
  );
}