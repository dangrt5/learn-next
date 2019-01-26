import Link from "next/link";
import Layout from "../components/Layouts";

const PostLink = props => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const Index = () => {
  return (
    <Layout>
      <h1>Index Page</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js" />
        <PostLink title="Deploy Apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Index;
