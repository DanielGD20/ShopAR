import { useState } from "react";
import Accordion from "./Accordion";

const ItemModal = ({ imgModal, productName, description, stars, price }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card post-preview lift mt-4" style={{ cursor: "pointer" }}>
      <img className="card-img-top img-fluid image-modal" src={imgModal} />
      <div className="card-body row">
        <div className="col-6">
          <h3 className="card-title">{productName}</h3>
          <h4>${price}</h4>
          <p className="card-text">{description}</p>
          <span className="text-warning">
            {stars == null ? "★ ★ ★ ★ ☆" : stars}
          </span>
          <p>{stars == null ? "4.0 Estrellas" : "4.0 Estrellas"}</p>
        </div>
        <div className="col-6">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            style={{
              paddingTop: "10%",
              paddingBottom: "10%",
              fontSize: "22px",
              marginTop: "3px",
            }}
          >
            Agregar al carrito de compras
            <br />
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      {accordionIds.map((i) => {
        return (
          <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
        );
      })}
    </div>
  );
};

const accordionIds = [0];

export default ItemModal;
