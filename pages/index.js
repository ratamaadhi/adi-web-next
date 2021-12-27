import { connect } from "react-redux";
import Layout from "../components/layout";
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
