import Svg from "../index_components/svg";
const HeaderTienda = (props) => {
  return (
    <header className="header-tienda mb-4">
      <div className="overlay">
        <Svg />
      </div>
      <img className="imagen" src={props.imageUrl} alt="foto1" />
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <header className="page-header">
              <div className="page-header-content pb-3">
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

export default HeaderTienda;
