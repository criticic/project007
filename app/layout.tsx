import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  title: 'project007 - Electoral Bond Data Analysis',
  description:
    'A project to make the electoral bond data, released by the Election Commission of India, more accessible and understandable to the general public.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
