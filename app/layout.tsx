import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#3b82f6" initialPosition={0.08} crawlSpeed={200} height={4} crawl={true} showSpinner={true} easing="ease" speed={200} shadow="0 0 10px #3b82f6,0 0 5px #3b82f6" />
        {children}
      </body>
    </html>
  );
}
