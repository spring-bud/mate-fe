import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderLayout from '@/components/shared/header/HeaderLayout';
import Footer from '@/components/shared/footer/Footer';
import ReactQueryProvider from '@/lib/react-query/provider';
import InitializeAuth from '@/providers/InitializeAuth';
import { cookies } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function getAuthStatus() {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refresh_token');
    return !!refreshToken;
  }

  const authStatus = await getAuthStatus();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <InitializeAuth isAuthenticated={authStatus} />
          <HeaderLayout isAuthenticated={authStatus} />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
