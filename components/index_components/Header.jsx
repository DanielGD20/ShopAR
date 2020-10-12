import Svg from "./svg";

const Header = (props) => {
  return (
    <header>
      <div className="overlay">
        <Svg />
      </div>
      <img className="imagen" src="/images/foto1.jpg" alt="foto1" />
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <header className="page-header">
              <div className="page-header-content">
                <div className="container text-center">
                  <div className="row justify-content-center">
                    {props.children}
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <Svg />
    </header>
  );
};

export default Header;
