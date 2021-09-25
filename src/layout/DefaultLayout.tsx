import React from 'react';
import Navbar from '../components/Navbar/Navbar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default DefaultLayout;
