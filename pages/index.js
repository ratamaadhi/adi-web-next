import Head from "next/head";
import { connect } from "react-redux";
import Layout from "../components/layout";
import Hero from "../components/section/hero";
import HeroSec from "../components/section/heroSec";
import Seo from "../components/seo";

function Home(props) {
  return (
    <Layout>
      <Seo />
      <HeroSec/>
    </Layout>
  );
}

export default connect((state) => state)(Home);
