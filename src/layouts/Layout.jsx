import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <section className="flex items-center flex-col gap-9 justify-between">
      <Header />
      {children}
      <Footer/>
    </section>
  );
}

// Validation des props avec PropTypes
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
