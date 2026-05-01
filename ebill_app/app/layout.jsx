import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = {
  title: 'EBill Dashboard',
  description: 'Billing overview and cash flow dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
