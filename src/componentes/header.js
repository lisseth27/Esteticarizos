import "../css/header.css";
import Link from "next/link";
export function Header() {
  return (
    <header>
      
      <div className="topbarright">
        <Link href="/">
        
          <div className="logo"></div>
        </Link>
      </div>
      <div className="topbarcenter">
        <Link href="/">Home</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/servicios">Servicios</Link>
          <Link href="/citas">Citas</Link>
        
           <Link href="/contacto">Contacto</Link>
      </div>
      <div className="topbarleft">
              <Link href="/">Whatsapp: 8136251663</Link>
      </div>
    </header>
  );
}
