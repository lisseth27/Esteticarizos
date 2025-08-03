import Link from 'next/link'
import "../css/footer.css"


export function Footer() {
  return (
    <footer>
      <div className="containerfooter">
      
            <grid> Estetica Rizos </grid>
            <p>Direccion: uranio 135 San Pedro Garza Garcia </p>
          

          <Link href="/contacto">Contacto</Link>
          <Link href="/Faq">Preguntas Frecuentes</Link>        
        
        </div>

      
     
    </footer>
  );
}
