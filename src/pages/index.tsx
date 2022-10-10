import Banner from '@/components/layout/Banner';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
// import planet from 'public/svg/planet.svg';
// import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Banner />
      {/* <span className='mx-auto mt-16 grid '>
        <Image className='animate-spin' src={planet} width={50} height={50} />
      </span> */}
    </Layout>
  );
}
