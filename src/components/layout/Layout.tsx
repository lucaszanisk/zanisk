import NavBar from '@/components/layout/NavBar';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
