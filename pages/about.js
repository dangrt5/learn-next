import Layout from "../components/Layouts";

const About = () => {
  return (
    <Layout>
      <h1>About Page in Next.js</h1>
      <style jsx>
        {`
          div h1 {
            color: hotpink;
            font-size: 2em;
          }

          div a {
            font-size: 3em;
          }
        `}
      </style>
    </Layout>
  );
};

export default About;
