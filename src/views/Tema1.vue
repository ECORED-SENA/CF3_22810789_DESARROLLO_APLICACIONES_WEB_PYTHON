<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Qué es un mapa de navegación
    p.mb-5(data-aos='fade-right') Un mapa de navegación #[span.color-primario es una representación gráfica de la forma en cómo está distribuida una aplicación], en este documento reposan los diferentes módulos u opciones que presentan un sistema y se utiliza como base fundamental para que el usuario pueda comprender y realizar todas las operaciones que el sistema requiere.
    .bg-tema1.mn.p-5.pb-2
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.color-secundario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3: img(src='@/assets/curso/temas/atencion.svg', alt='')
              .col-lg-10
                p.text-white Los mapas de navegación facilitan no solo la operatividad del sistema de información, sino que también evitan errores al momento de realizar el uso de un sistema informático.
          p A lo largo de los tiempos los mapas de navegación se han convertido en parte de la documentación del manual de uso del sistema, en la que se ve reflejado cada una de las características técnicas como las diferentes pantallas o formularios que presenta el sistema.
            br
            br
            |Si se hace referencia a un ámbito de la vida cotidiana, es como tener una vivienda sin planos; es decir, puede existir la vivienda, puede usarse, pero al momento de ingresar a ella no se ubica la persona de manera correcta. El mapa de navegación es como el plano de una vivienda donde muestra la ubicación de cada componente de la misma y, adicional a ello, permite tener un conocimiento de distribución de cada uno de los espacios que esta posee.
        .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1
            br
            span.fst-italic Ejemplo de mapa de navegación
          img(src='@/assets/curso/temas/tema1/2.svg', alt='La imagen muestra un ejemplo de un Mapa de Navegación. En el diagrama, se representan las diferentes páginas o secciones de un sitio web o una aplicación. Se visualizan las conexiones y rutas que los usuarios pueden seguir para navegar entre las distintas páginas.')
      p.mb-5(data-aos='fade-right') Como se puede observar en la imagen el mapa de navegación muestra la forma en la que se encuentran distribuidas cada una de las partes del sistema. Esto permitirá que la persona que lo utiliza pueda realizar la exploración del sitio de una manera adecuada y conociendo cada una de las características del mismo.
      .tarjeta(style="background-color: #c2dcf5 ").p-4.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
          .col-lg-11: p.mb-0 Dentro de la documentación del usuario se explica qué contiene cada parte del sistema, a qué lugar lo llevará y qué información debe este suministrar para realizar las operaciones que se requieren dentro del mismo. Esto no solo ayuda a la operación del sistema, sino que también le permite al usuario ser mucho más preciso y realizar un aprovechamiento del sistema de una manera adecuada.
      p.mb-5(data-aos='fade-right') Los mapas de navegación también surgen de los procesos de documentación de sistemas de información. Esto está orientado en gran parte a las aplicaciones web y móviles, las cuales en la mayoría de los casos pueden llegar a ser un poco más complejas de operar para los usuarios; Los mapas de navegación, entonces, se convierten en un insumo valioso para mitigar estos inconvenientes.
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          p.mb-3 El mapa de navegación #[span.color-primario es un esquema, que se puede pensar como un árbol jerárquico, que representa la arquitectura de las páginas de un sitio web.]
          .tarjeta.p-4.mb-3(style="background-color: #d5cef8 ")
            p.mb-0 Esta representación gráfica puede ser como un mapa conceptual, para visualizar y entender el recorrido del visitante; es decir, su navegación y cómo este llega a lo que está buscando. También, en este se organiza la distribución y la jerarquía del contenido.
          p Las ventajas de tener un mapa de navegación es que permite lograr diferenciarse de los demás sistemas al tener un sitio amigable y que entiende al usuario, contar con un fácil acceso al contenido y con ello, la generación de más conversiones y de satisfacción con el servicio que se provee en un sitio web, como lo puede ser en algunos casos el informativo.
        .col-lg-5.col-8: img(src='@/assets/curso/temas/tema1/4.png', alt='')
      .cajon-b.color-acento-contenido.p-3.mb-5.arriba-derecha
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            p.mb-0 Para realizar un mapa de navegación se debe tener en cuenta algunas consideraciones que permiten realizar de manera detallada y eficiente este proceso.
              br
              br
              span.color-primario Es importante revisar cada uno de estos para realizarlo de forma correcta:
          .col-lg-2.col-3: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
      .d-lg-none.d-block
        .tarjeta.p-4.bg-card-1.mb-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/6.svg', alt='')
          p.text-center Comienza con la creación de un diagrama jerárquico para establecer el orden y la importancia de la información.
        .tarjeta.p-4.bg-card-1.mb-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/7.svg', alt='')
          p.text-center Se establece cuáles y el número de páginas que se van a desplegar en las diferentes secciones del sitio web.
        .tarjeta.p-4.bg-card-1.mb-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/8.svg', alt='')
          p.text-center Luego, incluye ramificaciones hacia secciones secundarias que se desplegarán de las principales.
        .tarjeta.p-4.bg-card-1.mb-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/9.svg', alt='')
          p.text-center Se revisa que en el diseño se hayan incluido diferentes categorías, como también todo el contenido que se necesita mostrar.
        .tarjeta.p-4.bg-card-1.mb-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/10.svg', alt='')
          p.text-center Finalmente, se comparte y explica el mapa de navegación a otras personas para identificar si es entendible y amigable de la forma en la que se presenta la información.
      .d-none.d-lg-block
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4").slyderf-icon
          .tarjeta.p-4.bg-card-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema1/6.svg', alt='')
            p.text-center Comienza con la creación de un diagrama jerárquico para establecer el orden y la importancia de la información.
          .tarjeta.p-4.bg-card-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema1/7.svg', alt='')
            p.text-center Se establece cuáles y el número de páginas que se van a desplegar en las diferentes secciones del sitio web.
          .tarjeta.p-4.bg-card-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            p.text-center Luego, incluye ramificaciones hacia secciones secundarias que se desplegarán de las principales.
          .tarjeta.p-4.bg-card-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema1/9.svg', alt='')
            p.text-center Se revisa que en el diseño se hayan incluido diferentes categorías, como también todo el contenido que se necesita mostrar.
          .tarjeta.p-4.bg-card-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema1/10.svg', alt='')
            p.text-center Finalmente, se comparte y explica el mapa de navegación a otras personas para identificar si es entendible y amigable de la forma en la que se presenta la información.
    p.mb-5(data-aos='fade-right') Estos consejos permitirán realizar un diseño de mapa de navegación de manera correcta teniendo los propósitos y lineamientos necesarios para realizar este tipo de procesos que son requeridos por los sistemas de información, dando como prioridad a aquellos que utilizan interfaces gráficas orientadas a la web y dispositivos móviles; es importante también tener en cuenta que cada una de las aplicaciones informáticas deben estar inmensamente incluidas dentro de todos estos procesos en particular.
    .subtitulo.mb-4(data-aos='fade-right')
      h3 Tipos de mapa de navegación
    .cajon-b.color-primario.p-3.mb-5.arriba-derecha
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p.mb-0 Para establecer la estructura del mapa de navegación de un sitio web se pueden crear diferentes tipos de rutas, dependiendo de la complejidad del sitio y de su número de páginas, así puede haber varios niveles de estructura web para gestionar la información.
            br
            br
            span.color-primario Se presentan los tipos de estructuras:
        .col-lg-2.col-3: img(src='@/assets/curso/temas/tema1/11.svg', alt='')
    LineaTiempoD.color-acento-contenido.linea-edit.mb-4
      .row(numero="1" titulo="Estructura lineal")
        .row.justify-content-center.mb-5
          .col-lg-4
            p La más simple, ya que simplemente cada página está vinculada a la anterior, por lo que funciona bien en un sitio de pocas páginas.
          .col-lg-8
            img(src='@/assets/curso/temas/tema1/12.svg', alt='La imagen muestra un ejemplo de una estructura lineal. En el diagrama, se puede observar una secuencia de elementos dispuestos en una línea recta, uno después del otro. Cada elemento está conectado directamente al siguiente, sin ramificaciones ni bifurcaciones.')
      .row(numero="2" titulo="Estructura jerárquica")
        .row.justify-content-center.mb-5
          .col-lg-4
            p Esta estructura pone en un rango superior la página de inicio y en un nivel inferior de ella, las diferentes categorías y subcategorías del sitio web.
          .col-lg-8
            img(src='@/assets/curso/temas/tema1/13.svg', alt='La imagen muestra un ejemplo de una estructura jerárquica. En el diagrama, se pueden identificar diferentes niveles o capas de elementos organizados de manera jerárquica. En la parte superior se encuentra un elemento principal o raíz, del cual se desprenden ramificaciones o subelementos en niveles inferiores. Cada nivel representa una relación de subordinación, donde los elementos inferiores están vinculados y dependen del elemento superior.')
      .row(numero="3" titulo="Estructura compuesta")
        .row.justify-content-center.mb-5
          .col-lg-4
            p Esta se compone de varios tipos de estructura como la lineal, en donde alguna parte deriva a una estructura jerárquica, lo que permite jugar ampliamente con la organización de diversa información.
          .col-lg-8
            img(src='@/assets/curso/temas/tema1/14.svg', alt='La imagen muestra un ejemplo de una estructura de navegación compuesta. En el diagrama, se pueden observar diferentes elementos de navegación agrupados en categorías o secciones principales. Cada sección principal contiene elementos de navegación secundarios, que a su vez pueden contener elementos de navegación adicionales. ')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Existen, entonces, varias formas de representación de los mapas de navegación, los cuales pueden ser utilizados para brindar al usuario de la aplicación una guía práctica de las funciones y procesos que están incluidos en el sistema y de esta manera realizar un correcto uso de la misma.
        .tarjeta.color-secundario.p-3.mb-lg-0.mb-3
          p.mb-0.text-white Hasta aquí se ha visto cómo elaborar un correcto prototipo de navegación permitirá hacer un uso correcto dentro de un sistema de información.
      .col-lg-2.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/16.svg', alt='')

</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    modal1: false,
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
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
