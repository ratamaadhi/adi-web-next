import Head from "next/head";
import { connect } from "react-redux";
import Layout from "../components/layout";
import Hero from "../components/section/hero";
import Seo from "../components/seo";

function Home(props) {
  return (
    <Layout>
      <Seo />
      <Hero/>
    </Layout>
  );
}

export default connect((state) => state)(Home);
