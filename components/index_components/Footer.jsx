const Footer = () => {
  return (
    <div className="footer-fixed">
      <section className="bg-light py-2">
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
      </section>
      <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 small">Copyright © ShopAR 2020</div>
            <div className="col-md-3 icon-list-social">
              <a className="icon-list-social-link" href="javascript:void(0);">
                <i className="fab fa-instagram" /> @UpDavo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
