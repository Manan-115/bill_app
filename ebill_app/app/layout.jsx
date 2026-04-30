import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';

export const metadata = {
  title: 'EBill Dashboard',
  description: 'Billing overview and cash flow dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
