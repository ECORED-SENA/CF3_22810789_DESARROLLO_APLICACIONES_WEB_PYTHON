<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo de hojas de estilo CSS     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Las hojas de estilo css, son las que permiten organizar un código de estructura de página HTML, el nacimiento de este componente se realiza por la necesidad de poder organizar los elementos que se reflejan en una página web y que están estrechamente relacionados con su distribución y ubicación de componentes. 
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3
        p Uno de los procesos que requieren mayor análisis y atención es precisamente entender la necesidad del cliente y plasmar de una manera adecuada los elementos y componentes que se requieren para el uso del sistema, recordemos que los elementos y componentes que se requieren para que el usuario final pueda realizar un uso adecuado del sistema.
        .tarjeta.color-secundario.p-4  
          p.mb-0.text-white Las hojas de estilo css permiten personalizar la experiencia del usuario al utilizar el sistema y realizar un proceso de indicaciones al usuario de manera adecuada; por lo que en este tema veremos cómo utilizar los estilos css para mejorar la apariencia y usabilidad del sistema.  
      .col-lg-5.col-7: img(src='@/assets/curso/temas/tema5/2.png', alt='')
    p.mb-5(data-aos='fade-right') De acuerdo con las tendencias y manejo de herramientas web se busca que la apariencia del sistema y su usabilidad cumplan con estándares donde el directamente beneficiado es el usuario del sistema, podemos de hecho afirmar que un gran porcentaje del éxito de un proyecto de software web es la capacidad de integrar los componentes de tal manera que el usuario final tenga una experiencia satisfactoria una de las cuales está conectada con los siguientes aspectos:
    .bg-tema5.p-5.mn.pb-2
      .row.justify-content-center.mb-5
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.card-1.p-4.h-100
            img(src='@/assets/curso/temas/tema5/3.svg', alt='' style="width: 78px").m-auto.mb-4
            p.text-center Tiempos de duración en cargar la página.
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.card-1.p-4.h-100
            img(src='@/assets/curso/temas/tema5/4.svg', alt='' style="width: 78px").m-auto.mb-4
            p.text-center Calidad de los gráficos.
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.card-1.p-4.h-100
            img(src='@/assets/curso/temas/tema5/5.svg', alt='' style="width: 78px").m-auto.mb-4
            p.text-center Organización de los componentes.
        .col-lg-3
          .tarjeta.card-1.p-4.h-100
            img(src='@/assets/curso/temas/tema5/6.svg', alt='' style="width: 78px").m-auto.mb-4
            p.text-center Facilidad de uso de la página.
      p.mb-5(data-aos='fade-right') CSS es un lenguaje informático que especifica cómo se presentan los documentos a los usuarios, cómo se diseñan, compaginan, etc. Un documento suele ser un archivo de texto estructurado con un lenguaje de marcado, HTML es el más común, existiendo otros como SVG o XML.
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.color-secundario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3: img(src='@/assets/curso/temas/atencion.svg', alt='')
              .col-lg-10
                p.text-white La principal diferencia radica en el propio concepto de ambos lenguajes. 
                  br
                  br
                  | Como comentábamos el HTML define la forma y estructura de una página web, mientras que el CSS es un lenguaje que funciona a través de hojas de diseño, que decide la apariencia visual a través de estilos
          p Para efectos del ejercicio seguiremos utilizando nuestro editor de código, visual studio code y procederemos a crear un archivo con la extensión .css, como se explica a continuación:
          ul.lista-ul--color
            li
              i.fas.fa-square(style="color: #221b6b")
              | Comenzamos con la creación del archivo dentro de la carpeta, continuando con la creada en el punto anterior para tener una continuidad sobre el trabajo realizado.
        .col-lg-5.col-7: img(src='@/assets/curso/temas/tema5/7.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4
            br
            span.fst-italic Creación del archivo
          img(src='@/assets/curso/temas/tema5/8.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code en el cual se aprecia el panel explorer desplegado, se indica al usuario hacer clic derecho sobre este para desplegar  un menú contextual y seleccionar la opción “new file”.')
      ul.lista-ul--color
        li
          i.fas.fa-square(style="color: #221b6b")
          | En el archivo empezaremos a crear las modificaciones que sufrirá nuestro archivo HTML con respecto a los estilos que deseamos se cambien en el mismo, es importante tener en cuenta que todo lo que se cambie en los objetos en HTML está relacionado directamente con los comandos ejecutados en el archivo css.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5
            br
            span.fst-italic Creación de archivo CSS
          img(src='@/assets/curso/temas/tema5/9.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code en la cual después de haber creado un archivo nuevo según las indicaciones del paso anterior, muestra un archivo nuevo llamado “estilo.css”')
      ul.lista-ul--color
        li
          i.fas.fa-square(style="color: #221b6b")
          | Por último, creamos la relación entre el archivo .css y nuestro documento de HTML para que todos los cambios que se realicen en el archivo .css afecten directamente a nuestro documento HTML de lo contrario no podremos visualizar los cambios de manera correcta.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6
            br
            span.fst-italic Referenciación de archivo CSS en documento HTML
          img(src='@/assets/curso/temas/tema5/10.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code en la cual se muestra el código que relaciona el archivo estilo.css con el documento HTML a través de una etiqueta link')
      p.mb-5(data-aos='fade-right') Veamos a continuación, la aplicación del CSS a través de un video: 
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.justify-content-center.mb-5
        .col-lg-2.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/11.svg', alt='')
        .col-lg-10(data-aos="fade-left")
          p Con nuestro ejemplo vimos una aplicación sencilla del css, #[span.color-primario debemos tener presente que los componentes a utilizar deben estar debidamente seleccionados por el tipo de información a solicitar al usuario.]
            br
            br
            | Adicionalmente a los requerimientos de la solución, en algunas ocasiones no se tienen en cuenta los diseños previos, los cuales se denominan #[em wireframes] para negociar con el cliente el tipo de procesos que se elaborarán. 
          .tarjeta.color-secundario.p-4
            p.mb-0.text-white En ese caso particular se puede llegar a fracasar en la construcción del aplicativo ya que probablemente lo que se construya no sea del agrado del cliente. Por lo cual la recomendación siempre es contar con un #[em wireframe] y su aprobación previa a su codificación.
    .subtitulo.mb-4
      h3 Manejo de #[em framework] Bootstrap
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Es un #[em framework] para el uso de estilos y diseño de componentes, el cual tiene su propio repositorio en internet este se usa para aplicar estilos ya predeterminados en los diseños de los formularios a construir y hace mucho más ameno el trabajo en cuanto a estilo y diseño de las plantillas de las páginas web.
        .tarjeta.bg-card1.p-4.py-5.mb-4 
          p.mb-0.ms-5 Este framework (Bootstrap) es uno de los más utilizados a nivel mundial ya que posee una excelente documentación y se consiguen bastantes ejemplos en toda la internet.
        p #[span.color-primario Veamos un ejemplo del manejo del framework Bootstrap aplicado a los estilos de páginas web:]
      .col-lg-5.col-7: img(src='@/assets/curso/temas/tema5/7.png', alt='')
    .bg-slyde.p-5.tarjeta.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Llamar la URL
            p Lo primero que se debe realizar es llamar la url de bootstrap del repositorio de internet, para poder utilizar los estilos que este presenta. La instrucción para realizarlo es la que se puede observar en la siguiente imagen y se debe colocar en la parte superior del documento de HTML.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema5/12.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code en la cual se muestra el código que enlaza el documento HTML con Bootstrap desde el repositorio de internet para poder utilizar los estilos presentes en este.		')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Revisar el código
            p El código bootstrap se ha colocado en el documento HTML, en la parte superior se observa el div con la etiqueta “col-4 container-fluid”. Esta etiqueta permite darle estilo al div para que permita establecer un orden específico a los elementos que se visualizarán en el div.
              br
              br
              |Adicional a ello la etiqueta class de los componentes ha cambiado utilizando la “form-control” que es la que controla los elementos en un formulario.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema5/13.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code en la cual se muestra el código de Bootstrap y su respectiva nomenclatura para poder utilizar los estilos definidos.')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Visualizando el resultado
            p Luego de aplicar estos cambios podemos visualizar el estilo que viene desde el repositorio del framework bootstrap.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema5/14.png', alt='En la imagen se observa el resultado obtenido en el navegador de la implementación de los estilos utilizado con Bootstrap para estilizar un formulario de registro.		')
    .row.justify-content-center.mb-5
      .col-lg-2.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/15.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Como se puede observar en las imágenes el estilo de los controles y aspecto de la página ha cambiado, esto debido a que todos los estilos aplicados en la página vienen del repositorio de bootstrap que se encuentra en internet y de esta manera se puede cambiar todos los controles solo llamando la propiedad que se requiere dentro del programa.
        .tarjeta.color-secundario.p-4
          p.mb-0.text-white Cabe resaltar que todos los componentes que se han utilizado hasta el momento con respecto al estilo vienen de internet (son libres), ya que agregamos la url para poder utilizar dichos estilos y en caso de que en la página de bootstrap realicen un cambio de diseño afectará a todas las páginas que dependen de estos repositorios para colocar los estilos a su página.


</template>

<script>
export default {
  name: 'Tema5',
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
.bg-card1
  background-image: url('../assets/curso/temas/tema5/bg-card1.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-tema5
  background-image: url('../assets/curso/temas/tema5/bg-tema5.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: initial
</style>
