import Svg from "../../general_components/svg";
import Banner from "../../general_components/header/Banner";

const Header = ({ children }) => {
  return (
    <header>
      <div className="overlay">
        <Svg />
      </div>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <header className="page-header">
              <div className="page-header-content">
                <div className="container text-center">
                  <div className="row justify-content-center">{children}</div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <Banner />
      <Svg />
      {/* <img className="imagen" src="/images/foto1.jpg" alt="foto1" /> */}
    </header>
  );
};

export default Header;
