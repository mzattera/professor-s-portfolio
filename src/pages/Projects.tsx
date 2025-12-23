import Layout from "@/components/Layout";
import MarkdownPage from "@/components/MarkdownPage";

const Projects = () => {
  return (
    <Layout>
      <MarkdownPage filePath="/content/projects.md" />
    </Layout>
  );
};

export default Projects;
