import Header from "./Header.jsx";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}

      <style jsx>{`
        margin: 20px;
        padding: 20px;
        border: 1px solid #ddd;
      `}</style>
    </div>
  );
};

export default Layout;
