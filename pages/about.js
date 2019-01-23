import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default About;
