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
        p.mb-0 Como se ha explorado hasta ahora, los mapas de navegación son técnicas de documentación utilizadas para brindar al usuario las orientaciones correctas en la distribución de los componentes funcionales que el sistema posee.
    p.mb-5(data-aos='fade-right') A continuación se expone la manera como se crea un mapa de navegación. #[span.color-primario Para ello, es necesario tener en cuenta que según la herramienta elegida habrá diferentes pasos a seguir; en este caso, se desarrollará a través de FlowMapp:]
    .tarjeta.bg-slyde.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Selección de la herramienta
            p Existen muchas herramientas en las que se puede realizar este proceso, sin embargo, el #[em software] a utilizar, para este caso, se denomina FlowMapp, el cual permite crear el mapa de navegación para un sitio web.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='La imagen muestra un pantallazo de la pagina principal del  sitio web de FlowMapp, el usuario debe registrarse a través del botón llamado "Sign up free".')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Registro
            p Una vez escogida la herramienta con la que se va a trabajar. Se procede a realizar el registro en el sitio web para utilizar la aplicación. Luego de ello, se solicitará seleccionar un plan; en este caso, se escoge la opción #[em “Sing up free”] para tener una licencia de uso libre.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='La imagen muestra un pantallazo de las diferentes opciones de planes que están disponibles, se invita al usuario a seleccionar la opción “sing up free”.')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Iniciar sesión
            p Después, se ingresan los datos de registro en la plataforma y se inicia sesión para utilizar el servicio del #[em software.]
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='La imagen muestra un pantallazo de la interfaz de inicio de registro en la cual el usuario debe registrar los datos de nombre, email, contraseña.		')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Crear proyecto
            p Luego de ingresar a la página principal se presiona el botón #[em “Create Project”] para empezar a crear el proyecto y elaborar el mapa de navegación.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='La imagen muestra un pantallazo de la interfaz de proyectos del aplicativo web FlowMapp, se invita a crear un nuevo proyecto mediante el botón “create Project”.')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Creando el mapa
            p Aparecerán diversas opciones para la elaboración del proyecto, en este caso, se presiona el botón que dice #[em “Create”] y aparecerán, entonces, varias opciones, se selecciona la que dice #[em “SiteMap”].
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/6.png', alt='La imagen muestra la interfaz de proyectos de FlowMapp donde se invita al usuario a dar clic en el botón “create” el cual despliega un menú de varias opciones dentro de las cuales se debe seleccionar “sitemap”.')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Seleccionamos la plantilla
            p Después, saldrá un listado para escoger, si se desea utilizar una plantilla o construirla en blanco, a efectos del ejercicio se selecciona la opción de plantilla. Es importante tener en cuenta que hasta este punto no se ha definido las opciones del aplicativo web, las cuales se mencionan más adelante.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/7.png', alt='La imagen muestra la interfaz de plantillas de mapas de sitios web de Flowmapp, en la cual se tiene la opción de seleccionar una plantilla o construirla desde cero.')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Configurando el mapa
            p Luego, se selecciona la opción #[em “News Portal Proyect”] Haciendo clic en cada uno de los elementos que contendrá el sitio, se colaca el diseño que le corresponde de acuerdo con lo presentado en esa imagen; es decir, en cada sesión del programa se tiene una pantalla que se le presenta al usuario y una imagen y opciones de lo que verá y de lo que debe realizar en cada una de ellas.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/8.png', alt='La imagen muestra las opciones de plantillas de sitios web de Flowmapp donde el usuario debe seleccionar la opción llamada “news portal proyect”.')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Culminación de este
            p Teniendo en cuenta lo anterior, esto permitirá que el usuario pueda tener un conocimiento mucho más detallado de lo que presenta la aplicación y poder tomar como referencia esa información para poder realizar un uso adecuado de cada una de las funciones que ofrece el sistema. En la imagen, se muestra, a manera de ejemplo, cómo quedaría la distribución de un posible mapa de navegación de un sitio web.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema2/9.png', alt='La imagen muestra un ejemplo de distribución de mapa de sitio web creado a partir de una plantilla del aplicativo web Flowmapp.		')
    .row.justify-content-center.mb-5
      .col-lg-2.mb-lg-0.mb-3.col-6: img(src='@/assets/curso/temas/tema2/10.svg', alt='')
      .col-lg-10 
        p Como se pudo observar en todos los pasos mostrados para la creación del mapa de navegación, siempre se hace necesario establecer la estructura y distribución de los diferentes elementos que se le presentarán al usuario, con el fin de que la información y el manejo del sistema esté de la mejor manera posible para él.
        .tarjeta.color-secundario.p-4
          p.mb-0.text-white Es importante tener un orden de los componentes y la forma en la que estos se presentan al usuario permitiendo una correcta interacción que minimice los errores y problemas.
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
