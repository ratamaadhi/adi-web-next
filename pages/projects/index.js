import { connect } from "react-redux";
import Layout from "../../components/layout";
import Projects from "../../components/section/projects";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import {useRouter} from 'next/router'

function ProjectsPage({projects}) {
  const seo= {
    metaTitle: 'Projects'
  }
  return (
    <Layout>
      <Seo seo={seo} />
      <Projects projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await fetchAPI('/projects')

  return {
    props: {
      projects
    },
  };
}

export default connect((state) => state)(ProjectsPage);
