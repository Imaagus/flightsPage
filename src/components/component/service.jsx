'use client'


export function Service(){
    return(
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Nuestros servicios</h2>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 m-4">
              <div className="text-center space-y-2 ">
                <h3 className="text-xl font-bold">Vuelo de bautismo</h3>
                <p className="text-muted-foreground mb-6">Disfruta de una experiencia única si deseas volar por primera vez en un entorno seguro y controlado. Es la oportunidad perfecta para celebrar eventos especiales, como cumpleaños, o para sorprender a alguien con un regalo inolvidable.</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Piloto por un dia</h3>
                <p className="text-muted-foreground mb-6">Toma el control y experimenta la emoción de volar como un verdadero piloto. Con la supervision de nuestros expertos, vive la adrenalina de estar al mando y disfruta de una experiencia unica.</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Vuelo Panoramico</h3>
                <p className="text-muted-foreground mb-6">Vuela sobre los paisajes, ciudades y puntos de interés más hermosos de Buenos Aires. Nuestros paseos panorámicos ofrecen vistas inigualables y momentos de tranquilidad.</p>
              </div>
            </div>
    </div>        
    )
}