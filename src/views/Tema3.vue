<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Wireframes] en aplicaciones #[em web]
    p.mb-3(data-aos='fade-right') A continuación, abordaremos una técnica de negociación con el cliente, la cual #[span.color-primario permite establecer los parámetros y componentes que tendrán las vistas del sistema. Esto permitirá que el diseño de la aplicación se ajuste a las necesidades y requerimientos establecidos por el cliente.]
    .bg-tema3.p-5.pt-2.mn.mb-4.pb-2
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3.order-2.order-lg-1
          p Uno de los puntos que pueden llegar a ser favorables o no favorables en la construcción de un producto es precisamente lograr realizar una comprensión efectiva de las necesidades del cliente y que estas, se puedan materializar de una forma acorde a lo que el cliente tiene pensado en el producto final.
          .tarjeta.color-secundario.p-4.mb-4
            p.mb-0.text-white Los #[span.color-acento-botones #[em wireframes]] se utilizan para llegar a ese punto de negociación con el cliente donde se construyen prototipos los cuales son validados con el cliente para concretar una aceptación por parte de este y así avanzar en la construcción del producto, pero siempre teniendo como bandera la negociación y aceptación de lo que se está construyendo.
          p A través de los procesos de elaboración de los #[em wireframes] se permite establecer un lenguaje de comunicación sencillo y eficaz con el cliente. Se parte de la premisa de que aquello que no se negocia y se valida tiene una tendencia de dirigirse por un camino oscuro e incierto.
        .col-lg-5.col-6.order-1.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/1.png', alt='')    
      .tarjeta(style="background-color: #d5cef8 ").p-4.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/2.svg', alt='') 
          .col-lg-11
            p.mb-0 Todos los procesos que se llevan a cabo en la construcción de un producto de software se deben negociar a través de establecer prototipos que son validados por parte del usuario y de esta manera ir avanzando en procesos que garanticen una aceptación válida por parte del cliente.
      p.mb-5(data-aos='fade-right') A continuación, veremos #[span.color-primario cómo crear o conceptualizar un #[em mockup (Wireframe)] de un aplicativo a desarrollar como parte del proceso de negociación-aprobación entre la persona encargada del desarrollo y el cliente:]
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/lUk09iM8NUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.mt-3 Video. ¿Cómo realizar un wireframe?
    p.mb-5(data-aos='fade-right') Como pudimos apreciar a través del video sobre la construcción de un #[em wireframe], el mismo está listo para ser validado por el usuario. 
    .tarjeta.bg-tema3-card.p-5.mb-4
      .row.justify-content-center.mb-5
        .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
        .col-lg-8 
          .card-icon.p-4.mb-4
            p.mb-0.ms-5 Todos los cambios que se realicen hacen parte del proceso de negociación que se establezca, esta técnica y también documentación de proceso permite mostrarle al usuario o cliente un prototipo no funcional en el cual se pueden realizar cambios sin necesidad de tener que codificar la aplicación y los cambios deben ser registrados en un acta donde firma el cliente y el responsable de la construcción del producto para dejar como evidencia la negociación y aceptación de lo establecido en el prototipo.
          p.mb-0(data-aos='fade-right') Gracias a la facilidad que esta herramienta ofrece para la construcción de prototipos y/o bocetos de #[em Front-End] tenemos una alta probabilidad que podemos pasar a una etapa de producción del diseño sin problemas de aceptación al final; ahora bien, sabemos que todo producto de #[em software] sufre cambios y modificaciones a lo largo de su proceso de construcción es indispensable ver desde el punto de aceptación del producto que tan factible es realizar un cambio sin afectar la negociación inicial que se tenía por el producto. De lo contrario, se procederá a realizar un nuevo diseño de #[em wireframes] para validar nuevamente el nuevo diseño o propuesta que requiere el cliente y luego desplegar estos cambios en la etapa de construcción del diseño funcional.
    p.mb-5(data-aos='fade-right') En resumen, podríamos agregar que un #[em wireframes] es una representación visual en escala de grises de la estructura y funcionalidad de una sola página #[em web] o pantalla de aplicación móvil, la cual permite conocer el diseño y distribución que presenta un software, es importante tener en cuenta que estos son negociados con el cliente y pertenecen a la documentación del proyecto, aunque su función principal es generar bocetos para solicitar por parte del cliente una aceptación. 
    .bg-tema3-2.p-5.mn.mb-4.pb-2
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.color-secundario.p-4.mb-4
            .text-white 
              h5 ¿Qué ventajas tiene el uso de un #[em wireframe]?
              p.mb-0 A veces el #[em wireframing] puede parecer innecesario, pues creemos que tenemos la “idea final” del proyecto en nuestra cabeza, y sólo necesitamos trasladarla al ordenador.
                br
                br
                | Sin embargo, si se incorpora este proceso a la metodología de trabajo, se notarán las múltiples ventajas de los #[em wireframes] para el diseño #[em web]: agilizarán los procesos y optimizará los tiempos. Así mismo, generarán un repertorio gráfico al que se puede recurrir ante nuevos encargos y se tendrá una idea clara del rumbo que ha de seguir el proyecto al unificar los criterios sobre una estructura y contenido con el resto de tu equipo y, más importante aún, con el cliente.
          p Gracias al #[em wireframe] se asegura de que los posibles cambios queden limitados a cuestiones estéticas, lo cual agilizará enormemente el desarrollo del trabajo. 
        .col-lg-5.col-8: img(src='@/assets/curso/temas/tema3/4.png', alt='')
      p.mb-5(data-aos='fade-right') Si se desea empezar a practicar la ejecución del #[em wireframes], existen en Internet varias herramientas gratuitas que ayudan a diseñarlos; a continuación, se dejan los enlaces de algunas de las más importantes:
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3
          a.anexo.mb-lg-0(href="https://www.axure.com" target="_blank").h-100.m-auto
            .row.justify-content-around.align-items-center
              .col-3.mb-lg-0.mb-3
                
                  img(src="@/assets/template/icono-link.svg")
              .col-md-9
                  p #[b Axure], Software para crear prototipos y especificaciones para sitios #[em web] y aplicaciones.  
        .col-lg-4.mb-lg-0.mb-3
          a.anexo.mb-lg-0(href="https://www.mockflow.com" target="_blank").h-100.m-auto
            .row.justify-content-around.align-items-center
              .col-3.mb-lg-0.mb-3
                
                  img(src="@/assets/template/icono-link.svg")
              .col-md-9
                  p #[b Mockflow], software de wireframing en su flujo de trabajo de diseño. 
        .col-lg-4
          a.anexo.mb-lg-0(href="https://www.gliffy.com" target="_blank").h-100.m-auto
            .row.justify-content-around.align-items-center
              .col-3.mb-lg-0.mb-3
                
                  img(src="@/assets/template/icono-link.svg")
              .col-md-9
                  p #[b Gliffy], software para crear diagramas UML, diagramas de flujo y otros tipos de diagramas en línea. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/5.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Como conclusión, se puede considerar que los #[em wireframes] hacen parte del aseguramiento de la calidad de un producto de #[em software] y logran un grado de aceptación por parte del usuario de una manera mucho más precisa y eficiente.
    .row.justify-content-center.mb-5
      .col-lg-11.mb-lg-0.mb-3
        p.mb-0 Todos los procesos en la construcción de #[em software] deben estar enfocados en cumplir con los requerimientos, tanto técnicos como funcionales del producto final de #[em software] que se trata de construir, por eso es importante siempre tener en cuenta negociar antes de construir el producto para garantizar un alto grado de aceptación y satisfacción del cliente.
      .col-lg-1.col-4: img(src='@/assets/curso/temas/tema3/6.svg', alt='') 
    








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-tema3
  background-image: url('../assets/curso/temas/bg-tema3.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
.bg-tema3-2
  background-image: url('../assets/curso/temas/tema3/bg-tema3-2.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
.bg-tema3-card
  background-image: url('../assets/curso/temas/card-icon.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
</style>
