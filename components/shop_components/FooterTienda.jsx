import Link from "next/link";

const FooterTienda = (props) => {
  return (
    <div className="footer-fixed">
      {/* <section className="bg-light py-2">
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
          </svg>
        </div>
      </section> */}
      <footer className="footer pt-5 pb-5 bg-dark footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link href={props.href}>
                <button
                  className="btn btn-teal btn-block btn-marketing rounded-pill"
                  type="submit"
                >
                  Regresar
                </button>
              </Link>
            </div>
            <div className="col-6">
              <button
                className="btn btn-teal btn-block btn-marketing rounded-pill"
                type="submit"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterTienda;
