import React from 'react';
import HomeContent from '../../components/home';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeContent seeMore={false} />
      <Footer />
    </div>
  );
}
