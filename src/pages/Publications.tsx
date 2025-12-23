import Layout from "@/components/Layout";
import MarkdownPage from "@/components/MarkdownPage";

const Publications = () => {
  return (
    <Layout>
      <MarkdownPage filePath="/content/publications.md" />
    </Layout>
  );
};

export default Publications;
