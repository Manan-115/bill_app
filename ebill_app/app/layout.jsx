import './globals.css';

export const metadata = {
  title: 'EBill Dashboard',
  description: 'Billing overview and cash flow dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
