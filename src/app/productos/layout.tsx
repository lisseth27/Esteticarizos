
import {List} from '@/componentes/list'
import '@/css/categoria.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <div className='contenedor-general'>
             <div className='contenedor-izquierda'>
            <List/>
        </div>
         <div className='contenedor-derecho'>
              {children}
        </div>
        </div>
      
      </body>
    </html>
  );
}

