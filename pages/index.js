import { connect } from 'react-redux';
import Layout from '../components/layout';
import Hero from '../components/section/hero';
// import HeroSec from '../components/section/heroSec';
import Seo from '../components/seo';

function Home() {
  return (
    <Layout>
      <Seo />
      {/* <HeroSec/> */}
      <Hero />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default connect((state) => state)(Home);
