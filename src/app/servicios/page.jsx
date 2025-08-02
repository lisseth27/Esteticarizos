import "@/css/product.css";
export default function servicios() {
  return (
    <>
      {" "}
      <h1> Productos que tenemos en catalogo </h1>
      <div className="containerpage">
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> Duo Facial</grid>
            <div className="img1"></div>

            <div className="precio">$259.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> Lifting</grid>
            <div className="img2"></div>

            <div className="precio">$219.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="container-producto">
          <div className="container-card-producto">
            <grid> Peeling</grid>
            <div className="img3"></div>

            <div className="precio">$50.00 pesos</div>
            <button>Comprar</button>
          </div>
        </div>
        
      </div>
    </>
  );
}
