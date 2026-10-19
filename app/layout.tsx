import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgriVision AI — Smart Farming Command Center',
  description: 'A modern farm intelligence dashboard for sensors, irrigation, crop health, markets and AI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
