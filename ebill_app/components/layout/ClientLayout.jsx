'use client';

import BottomNav from '../navigation/BottomNav';

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
