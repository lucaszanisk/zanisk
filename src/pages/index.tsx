import * as React from 'react';

import Banner from '@/components/Banner';
import Contato from '@/components/Contato';
import Layout from '@/components/layout/Layout';
import NavBar from '@/components/NavBar';
import Projetos from '@/components/Projetos';
import Seo from '@/components/Seo';
import Xp from '@/components/Xp';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='overflow-hidden bg-zanisk-blue'>
        <NavBar />
        <Banner />
        <Xp />
        <Projetos />
        <Contato />
      </main>
    </Layout>
  );
}
