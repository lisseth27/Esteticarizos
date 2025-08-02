import "@/css/product.css";
export default function producto() {
  return (
    <>
      {" "}
      <h1> Productos que tenemos en catalogo </h1>
      <div className="containerpage">
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> Corte de pelo</grid>
            <div className="image1"></div>

            <div className="precio">$299.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> pestañas</grid>
            <div className="image2"></div>

            <div className="precio">$109.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> uñas</grid>
            <div className="image3"></div>

            <div className="precio">$59.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        
      </div>
    </>
  );
}
