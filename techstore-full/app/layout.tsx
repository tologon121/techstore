import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';

export const metadata: Metadata = {
  title: {
    default: 'TechStore — Premium Tech, Delivered Fast',
    template: '%s | TechStore',
  },
  description:
    'Shop the latest smartphones, laptops, and accessories from Apple, Samsung, Lenovo, and more. Free shipping on orders over $50. 30-day returns.',
  keywords: [
    'tech store',
    'smartphones',
    'laptops',
    'accessories',
    'Apple',
    'Samsung',
    'MacBook',
    'iPhone',
    'electronics',
    'buy tech online',
  ],
  authors: [{ name: 'TechStore Team' }],
  creator: 'TechStore',
  publisher: 'TechStore',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techstore.vercel.app',
    siteName: 'TechStore',
    title: 'TechStore — Premium Tech, Delivered Fast',
    description:
      'Shop the latest smartphones, laptops, and accessories. Free shipping on orders over $50.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechStore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechStore — Premium Tech, Delivered Fast',
    description: 'Shop the latest smartphones, laptops, and accessories.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <AnnouncementBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
