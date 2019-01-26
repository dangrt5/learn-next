import { withRouter } from "next/router";
import Layout from "../components/Layouts";

const Page = withRouter(props => {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content</p>
    </Layout>
  );
});

export default Page;
