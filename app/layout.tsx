import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sweet Delights Bakery - Handcrafted Cakes & Pastries',
  description: 'Discover our artisanal cakes and pastries at Sweet Delights Bakery. Custom orders available for your special occasions.',
  keywords: 'bakery, cakes, custom cakes, pastries, desserts',
  openGraph: {
    title: 'Sweet Delights Bakery',
    description: 'Handcrafted cakes and pastries for your special moments',
    images: ['https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}