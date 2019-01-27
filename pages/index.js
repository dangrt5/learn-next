import Link from "next/link";
import Layout from "../components/Layouts";

const PostLink = props => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
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
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js" />
        <PostLink id="deploy-nextjs" title="Deploy Apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Index;
