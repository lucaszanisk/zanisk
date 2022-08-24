import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Seo from '@/components/Seo';
import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import Xp from '@/components/Xp';
import Projetos from '@/components/Projetos';
import Contato from '@/components/Contato';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='bg-zanisk-blue'>
        <NavBar />
        <Banner />
        <Xp />
        <Projetos />
        <Contato />
      </main>
    </Layout>
  );
}
