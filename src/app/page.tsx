import React from "react";
const stats = [
  { id: 1, name: 'Mas de 1500 clientes satisfechos  ', value: '+1500 Clientes' },
  { id: 2, name: 'Uñas, Corte de pelo, etc', value: 'Nuevos servicios' },
  { id: 3, name: 'extensiones, cepillos, etc', value: 'Nuevos Productos' },
]

export default function Home() {
  return (<>  <div className="image"> </div>  <h1> Estetica Unisex de nails y lashes</h1>
  <p> ofrecemos servicios de la más alta calidad, atendido por un equipo experimentado en belleza y estética, que te ofrecerá una experiencia única con un trato inmejorable.

 
En nuestro estudio seguimos estrictas prácticas de higiene y seguridad para garantizar a nuestros clientes un servicio con la calidad que se merecen.</p>

  
  <div className="ranking">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>


<div className="container-todo">

  <div className="container-izquierda">
    <h1> ¡Queremos consentirte como te mereces!</h1>
<span> Estamos especializados en todo tipo de servicios de manicura y pedicura: esmaltado, permanente, gel, tratamientos SPA, además de realizar Extensiones de Pestañas y Depilación con Hilo.¡Queremos consentirte como te mereces!
</span>
</div>
<div className="container-derecha">

</div>


</div>



<div className="container-testimonio">
  <h1> Testimonios</h1>

    <h3 className="text-gray-800 py-6 text-3xl text-center font-bold"></h3>
    <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">

        
        <div className="animate-in zoom-in duration-200">

          
            <div
                className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
                <div className="flex flex-col break-inside-avoid-page z-0 relative">
                    <div className="flex justify-between">
                        <div className="flex space-x-6">
                            <div className="flex space-x-4 flex-shrink-0 w-52">
                              
                                <div>
                                    <div className="font-semibold">
                                        Rosalia Martinez
                                    </div>
                                    <div className="text-sm">
                                        @Rosalia
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page">
                     soy cliente frecuente, me gusta mucho el servicio y voy cada rato, ademas tienen buenos precios y excelentes productos, lo recomiendo 
                    </a>
                </div>
            </div>
        </div>








        <div className="animate-in zoom-in duration-200">
            <div
                className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
                <div className="flex flex-col break-inside-avoid-page z-0 relative">
                    <div className="flex justify-between">
                        <div className="flex space-x-6">
                            <div className="flex space-x-4 flex-shrink-0 w-52">
                              
                                <div>
                                    <div className="font-semibold">
                                       Alicia
                                    </div>
                                    <div className="text-sm">
                                        @alicia
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="" target="_blank" className="whitespace-pre-line break-inside-avoid-page">
                        <span>
                            todo el rato encuentro a mis amigas en esta estetica, ademas esta cerca de mi casa, la recomiendo mucho por su relacion calidad/precio
                        </span>
                    </a>
                </div>
            </div>
        </div>






        <div className="animate-in zoom-in duration-200">
            <div
                className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
                <div className="flex flex-col break-inside-avoid-page z-0 relative">
                    <div className="flex justify-between">
                        <div className="flex space-x-6">
                            <div className="flex space-x-4 flex-shrink-0 w-52">
                               
                                <div>
                                    <div className="font-semibold">
                                        Esmeralda
                                    </div>
                                    <div className="text-sm">
                                        @Esmeralda
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page">
                        <span> tienen buenos productos para maquillaje, ademas un buen laciado de pelo y se fija mucho en la estetica y belleza de cada persona.
                        </span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</div>

  
  
    </>
  );
}
