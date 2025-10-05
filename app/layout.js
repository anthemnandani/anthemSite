import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';
import './assets/css/style.css';
import './assets/css/custom.css';
// import './assets/scss/_header.scss';
// import './assets/css/style.min.css';
import '../styles/App.css'; 
import "./globals.css";

import Header from "../partials/header/Header";
import Footer from "../components/FooterComponent/Footer";

export const metadata = {
  title: "Anthem Infotech - Software Product Development & IT Solutions",
  description: "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide.",
  keywords: "Software Development, IT Solutions, Digital Transformation, Product Development, Anthem Infotech",
  authors: [
    { name: "Hemant Gupta - CEO, Anthem Infotech", url: "https://antheminfotech.com" }
  ],
  creator: "Hemant Gupta - CEO, Anthem Infotech",
    icons: {
    icon: "./images/favicon.png", // favicon for browsers
    shortcut: "./images/favicon.png", // Windows / legacy
    apple: "./images/favicon.png", // Apple Touch Icon
  },
  openGraph: {
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    url: "https://antheminfotech.com",
    siteName: "Anthem Infotech",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnthemInfotech",
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    images: [
      "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp"
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Load Google Fonts like React */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Muli:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer is global */}
        <Footer />
      </body>
    </html>
  );
}
