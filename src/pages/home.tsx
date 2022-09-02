import Banner from '@/components/layout/Banner';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Banner />
    </Layout>
  );
}