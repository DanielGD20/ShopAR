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
          <div class="p-2" style={{ marginRight: "39%" }}>
            <button
              className="btn btn-danger btn-block btn-marketing rounded-pill pr-5 pl-5"
              type="submit"
              onClick={mensaje}
            >
              Salir
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterTienda;
