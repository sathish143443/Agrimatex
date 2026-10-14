import './globals.css';

export const metadata = {
  title: 'Agri Marketplace',
  description: 'Agricultural marketplace for farmers, buyers, and traders.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
