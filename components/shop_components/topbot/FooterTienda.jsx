import Link from "next/link";

const FooterTienda = ({ href }) => {
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
      <footer className="footer pt-3 pb-3 bg-dark footer-dark">
        <div class="d-flex flex-row-reverse">
          <div class="p-2">
            <button
              className="btn btn-primary btn-block btn-marketing rounded-pill"
              type="submit"
              style={{ paddingLeft: "80px", paddingRight: "80px" }}
            >
              Comprar
            </button>
          </div>
          <div class="p-2">
            <Link href={href}>
              <button
                className="btn btn-twitter btn-block btn-marketing rounded-pill"
                type="submit"
              >
                Revisar el carrito de compras
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterTienda;
