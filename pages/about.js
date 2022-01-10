import { connect } from "react-redux";
import Layout from "../components/layout";
import About from "../components/section/about";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

function AboutPage({about}) {
  return (
    <Layout>
      <Seo />
      <About about={about} />
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await fetchAPI("/about");
  return {
    props: {
      about
    },
  };
}

export default connect((state) => state)(AboutPage);
