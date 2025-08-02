import Link from 'next/link'
import "../css/footer.css"


export function Footer() {
  return (
    <footer>
      <div className="containerfooter">
      
            <grid> Estetica Rizos </grid>
          

          <Link href="/contacto">Contacto</Link>
          <Link href="/Faq">Preguntas Frecuentes</Link>        
        
        </div>

      
     
    </footer>
  );
}
