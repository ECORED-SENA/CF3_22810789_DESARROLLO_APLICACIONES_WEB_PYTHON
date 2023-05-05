<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Creación de mapas de navegación
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Como hemos explorado hasta ahora, los mapas de navegación son técnicas de documentación utilizadas para brindar al usuario que utiliza la aplicación las orientaciones en la distribución de los componentes funcionales que el sistema posee.
    p.mb-5(data-aos='fade-right') Veamos a continuación, la manera como se crea un mapa de navegación. #[span.color-primario Tenga en cuenta que según la herramienta elegida habrá diferentes pasos a seguir, en este caso a través de FlowMapp haremos la creación de un Mapa de Navegación:]
    .tarjeta.bg-slyde.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Selección de la herramienta
            p Vamos a utilizar un software llamado FlowMapp el cual nos permite crear el mapa de navegación para nuestro sitio web, existen muchas herramientas en las que se puede realizar este proceso, para efectos del ejercicio utilizaremos esta, por lo cual procedemos a registrarnos en la página para poder utilizar la aplicación.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Registro
            p Luego de registrarnos nos solicitará seleccionar un plan, en este caso procedemos a seleccionar la opción #[em “Sing up free”] para tener una licencia de uso libre.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Iniciar sesión
            p Luego procedemos a ingresar nuestros datos en la plataforma colocados en el registro e iniciamos sesión para poder utilizar el servicio del #[em software.]
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Crear proyecto
            p Luego de ingresar a la página principal presionamos el botón #[em “Create Project”] para empezar a crear nuestro proyecto y elaborar el mapa de navegación.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Creando el mapa
            p Nos aparecerán diversas opciones para la elaboración del proyecto, en este caso, procedemos a presionar el botón que dice #[em “Create”] y nos aparecerán varias opciones seleccionamos la que dice #[em “SiteMap”.]
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Seleccionamos la plantilla
            p Nos aparecerá un listado para seleccionar si deseamos utilizar una plantilla o construirla en blanco, a efectos del ejercicio seleccionaremos la opción de plantilla.
              br
              br
              |Es importante tener en cuenta que hasta este punto no hemos definido las opciones del aplicativo web las cuales mencionaremos más adelante.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Configurando el mapa
            p Seleccionamos la opción #[em “News Portal Proyect”]
              br
              br
              |Haciendo clic en cada uno de los elementos que contendrá el sitio colaremos el diseño que le corresponde de acuerdo con lo presentado en esa imagen, es decir, en cada sesión del programa tenemos una pantalla que se le presenta al usuario y una imagen y opciones de lo que verá y de lo que debe realizar en cada una de ellas.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Culminación de este
            p Teniendo en cuenta lo anterior, esto permitirá que el usuario pueda tener un conocimiento mucho más detallado de lo que presenta la aplicación y poder tomar como referencia esa información para poder realizar un uso adecuado de cada una de las funciones que ofrece el sistema.
              br
              br
              |En la imagen, mostramos a manera de ejemplo cómo quedaría la distribución de un posible mapa de navegación de un sitio web de ejemplo.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-2.mb-lg-0.mb-3.col-6: img(src='@/assets/curso/temas/tema2/10.svg', alt='Texto que describa la imagen')
      .col-lg-10 
        p Como pudimos observar en todos los pasos mostrados para la creación del mapa de navegación, es importante siempre establecer la estructura y distribución de los diferentes elementos que se le presentarán al usuario, esto se hace con la finalidad que la información y manejo del sistema sea de la mejor manera posible para el usuario.
        .tarjeta.color-secundario.p-4
          p.mb-0.text-white Es importante tener un orden de los componentes y la manera en la que estos se presentan al usuario permitiendo una correcta interacción que minimiza los errores y problemas.
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
