import Link from "next/link";
import { useRouter } from "next/router";

const FooterTienda = ({ href }) => {
  const router = useRouter();

  const mensaje = () => {
    let valor = confirm("¿Estás segúro de que deseas salir?");
    if (valor) {
      router.push("/");
    }
  };

  return (
    <div className="footer-fixed">
      <footer className="footer">
        <div class="d-flex flex-row-reverse">
          <div class="p-2 mr-4">
            <button
              className="btn btn-success btn-block btn-marketing rounded-pill"
              type="submit"
              style={{ paddingLeft: "80px", paddingRight: "80px" }}
            >
              Pagar <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
          <div class="p-2">
            <Link href={href}>
              <button
                className="btn btn-twitter btn-block btn-marketing rounded-pill"
                type="submit"
                style={{ paddingLeft: "45px", paddingRight: "45px" }}
              >
                Revisar el carrito de compras{" "}
                <i class="fas fa-shopping-cart"></i>
              </button>
            </Link>
          </div>
          <div class="p-2" style={{ marginRight: "15.5%" }}>
            <button
              className="btn btn-danger btn-block btn-marketing rounded-pill pr-5 pl-5"
              type="submit"
              onClick={mensaje}
            >
              Salir <i class="fas fa-door-open"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterTienda;
