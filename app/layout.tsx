import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Mellowdrop — Your daily, your way',
  description: 'Meet Mellowdrop. A fresh take on daily creatine, with resealable pouches, portable stick packs, and boxed sets.',
  icons: { icon: '/icon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
