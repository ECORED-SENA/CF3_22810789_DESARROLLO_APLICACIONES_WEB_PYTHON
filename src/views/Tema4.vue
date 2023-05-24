<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo de lenguaje HTML
    .bg-tema4.mn.p-5.pb-2
      .row.justify-content-center.mb-3
        .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
          .tarjeta.color-secundario.p-4.mb-3
              .row.justify-content-center.align-items-center
                .col-lg-2.col-3: img(src='@/assets/curso/temas/atencion.svg', alt='')
                .col-lg-10
                  p.text-white El lenguaje HTML o también llamado por sus siglas #[span.color-acento-botones Lenguaje de Marcado de Hipertexto] es una serie de códigos utilizados para crear la estructura de las páginas o sitios #[em web]  que visitamos a diario en internet, es importante tener en cuenta que este lenguaje lleva muchos años en el mercado y desde siempre ha sido el referente utilizado para realizar este tipo de procesos.  
          p #[span.color-secundario HTML] es un lenguaje que se ha convertido en el estándar utilizado por todos los navegadores de internet para realizar el proceso de interpretación y visualización de los sitios #[em web]  a nivel mundial, #[span.color-secundario tiene una presencia e importancia en los procesos de desarrollo y construcción de sitios #[em web] ], tal que no se puede pensar en el despliegue o construcción de un sitio #[em web]  actualmente sin su uso e implementación.
            br
            br
            |A pesar de que han pasado muchos años sigue predominando el uso de este lenguaje para realizar este proceso; ahora bien, este lenguaje tiene algo particular y es la adaptación con diferentes frameworks para mejorar no solo la apariencia de las aplicaciones sino también su adaptabilidad a las necesidades de los usuarios.
        .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/2.jpg')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 HTML no es un lenguaje de programación, es un lenguaje de marcado que define la estructura de tu contenido. Consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera. 
      p.mb-5(data-aos='fade-right') #[span.color-primario Las etiquetas de encierre pueden hacer de una palabra o una imagen, un hipervínculo a otro sitio, se pueden cambiar palabras en cursiva, agrandar o achicar la letra, etc.]
      .row.justify-content-center.mb-3
        .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
          .tarjeta.p-4.mb-3(style="background-color:#c2dcf5 ")
              .row.justify-content-center.align-items-center
                .col-lg-2.col-3: img(src='@/assets/curso/temas/tema4/3.svg', alt='')
                .col-lg-10
                  p Para iniciar el trabajo con nuestras etiquetas HTML debemos dirigirnos a un editor de código visual (en nuestro caso visual studio code), se debe tener en cuenta que esta vez trabajaremos con archivos con extensión HTML y que esto requiere un trabajo diferente al que se ha trabajado hasta el momento, como vemos a continuación: 
          ul.lista-ul--color
            li
              i.fas.fa-square(style="color: #362b9e ")
              | Para realizar este proceso primeramente ejecutaremos nuestra aplicación de visual studio code.
            li
              i.fas.fa-square(style="color: #362b9e ")
              | Luego de este proceso procedemos a crear una carpeta en una ubicación del computador y la abrimos en nuestro editor de código para luego agregar los archivos en este espacio de trabajo.
            li
              i.fas.fa-square(style="color: #362b9e ")
              | Seguidamente de este proceso de creación procedemos abrir la carpeta creada en nuestro visual studio code para realizar la creación de los diferentes archivos requeridos en nuestro sitio #[em web] .
            li
              i.fas.fa-square(style="color: #362b9e ")
              | Luego de realizar la subida de la carpeta para trabajar se debe crear el archivo HTML para hacer la codificación de la estructura de la página, hacemos clic en el primer icono de la barra de la carpeta llamado #[em new file] y luego procedemos a colocarle el nombre de acuerdo con la dinámica del proyecto.
            li
              i.fas.fa-square(style="color: #362b9e ")
              | Una vez que ya hemos creado el archivo procedemos a colocarle la estructura básica de todo archivo HTML presionando la tecla Ctrl + espacio y luego seleccionando la opción “HTML sample” #[span.color-primario como se observa en la figura:]
        .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/4.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2 
            br
            span.fst-italic Creación de la estructura básica archivo HTML
          img(src='@/assets/curso/temas/tema4/5.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code donde el usuario mediante un atajo puede crear una estructura básica de un archivo HTML.')
      ul.lista-ul--color
        li
          i.fas.fa-square(style="color: #362b9e ")
          | Luego de realizar las instrucciones expuestas, nos generará el siguiente código para la generación de nuestra estructura de archivo HTML.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3 
            br
            span.fst-italic Estructura archivo HTML5
          img(src='@/assets/curso/temas/tema4/6.png', alt='En la imagen se observa una captura de pantalla del entorno de desarrollo de Visual Studio Code donde se aprecia un ejemplo de una estructura de archivo HTML 5.')
      p.mb-5(data-aos='fade-right') Veamos a continuación los elementos más comunes para tener en cuenta en el HTML, estos son los más utilizados en el HTML y no solo se muestran, sino que también se indica su origen y/o uso:
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-right")
          LineaTiempoD.color-acento-contenido.linea-edit.mb-4
            div(numero="1" titulo=" &lt;!DOCTYPE html &gt;")
              p #[b  &lt; !DOCTYPE html &gt;]  - el tipo de documento
                br
                br
                |Es un preámbulo requerido. 
                br
                br
                |Anteriormente, cuando HTML era joven (cerca de 1991-1992), los tipos de documento actuaban como vínculos a un conjunto de reglas que el código HTML de la página debía seguir para ser considerado bueno.
                br
                br
                |Lo que podía significar la verificación automática de errores y algunas otras cosas de utilidad. Sin embargo, hoy día es simplemente un artefacto antiguo, pero que debe ser incluido para que todo funcione correctamente. 
            div(numero="2" titulo="&lt; html &gt")
              p Este elemento encierra todo el contenido de la página entera y a veces, se le conoce como el elemento raíz (root element).
            div(numero="3" titulo="&lt;head &gt")
              p Este elemento actúa como un contenedor de todo aquello que quieres incluir en la página HTML que no es contenido visible por los visitantes de la página. 
                br
                br
                |Incluye cosas como palabras clave (keywords), una descripción de la página que quieres que aparezca en resultados de búsquedas, código CSS para dar estilo al contenido, declaraciones del juego de caracteres, etc.
            div(numero="4" titulo="&ltmeta charset= &quot;utf-8&quot&gt")
              p Este elemento establece el juego de caracteres que tu documento usará en utf-8, que incluye casi todos los caracteres de todos los idiomas humanos. 
                br
                br
                |Básicamente, puede manejar cualquier contenido de texto que puedas incluir. 
                br
                br
                |No hay razón para no establecerlo, y puede evitar problemas en el futuro.
            div(numero="5" titulo="&lt;title&gt")
              p Establece el título de tu página, que es el título que aparece en la pestaña o en la barra de título del navegador cuando la página es cargada, y se usa para describir la página cuando es añadida a los marcadores o como favorita.
            div(numero="6" titulo="&lt;body&gt")
              p Encierra todo el contenido que deseas mostrar a los usuarios #[em web]  que visiten tu página, ya sea texto, imágenes, videos, juegos, pistas de audio reproducibles, y demás.
        .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/7.svg', alt='')
    .cajon-b.color-primario.p-3.mb-5.arriba-derecha
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11
          p Estos elementos mencionados anteriormente son las cabeceras principales para realizar la estructura y maquetación de nuestro sitio. 
            br
            br
            span.color-primario Ahora a continuación, veremos algunas instrucciones para operar de manera adecuada la creación de contenidos de nuestro sitio #[em web] :
        .col-lg-1.col-4: img(src='@/assets/curso/temas/tema4/8.svg', alt='')
    TabsB.color-primario.mb-5
      .bg-p.p-4.py-md-5(titulo="Imágenes" :icono="require('@/assets/curso/temas/tema4/9.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Si se desea incrustar una imagen en la página, en una posición determinada. 
              | Se logra a través del atributo src (source), el cual contiene el path (ruta o ubicación) de tu archivo de imagen.
              br
              br
              | #[b Ejemplo ]
              br
              br
              | #[b &lt;img src=&quot;images/firefox-icon.png&quot; alt=&quot;Mi imagen de prueba&quot;&gt;]
              br
              br
              | En la codificación, también se incluye un atributo alt (alternative), el cual contiene un texto que debería describir la imagen y que podría ser accedido por usuarios que no pueden ver la imagen.
              br
              br
              | Para este caso debemos agregar la imagen que se visualizará en la página en la carpeta que creemos del sitio #[em web] , a través de visual studio code.
              br
              br
              | Luego si procedemos a ejecutar nuestro sitio dando doble clic a el archivo index (que es nuestro archivo HTML) para poder visualizar el resultado, como vemos en la imagen.
          .col-lg-6: img(src='@/assets/curso/temas/tema4/10.png', alt='')
      .bg-p.p-4.py-md-5(titulo="Encabezados" :icono="require('@/assets/curso/temas/tema4/15.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Los elementos de encabezado permiten especificar que ciertas partes del contenido son encabezados, o sub encabezados del contenido. 
              br
              br
              | De la misma forma que un libro tiene un título principal y que a su vez puede tener títulos por cada capítulo individual, y subtítulos dentro de ellos, un documento HTML puede tenerlos también. 
              br
              br
              | HTML posee seis niveles de encabezados, Del &lt;h1&gt; al &lt;h6&gt; (en-US), aunque probablemente solo llegues a usar 3-4 como mucho:
              br
              br
              | #[b Ejemplo]
              br
              | &lt;h1&gt;Mi título principal&lt;/h1&gt;
              br
              |&lt;h2&gt;Mi título de nivel superior&lt;/h2&gt;
              br
              |&lt;h3&gt;Mi subtítulo&lt;/h3&gt;
              br
              |&lt;h4&gt;Mi sub-subtítulo&lt;/h4&gt;
              br
              br
              | La instrucción &lt;h&gt; acompañada del número del 1 al 6 permite aumentar el tamaño e intensidad del marcado del texto siendo 1 la de mayor tamaño y 6 la de menor tamaño e intensidad.
          .col-lg-6: img(src='@/assets/curso/temas/tema4/11.png', alt='')
      .bg-p.p-4.py-md-5(titulo="Párrafos" :icono="require('@/assets/curso/temas/tema4/16.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Los elementos &lt;p&gt; se utilizan para encerrar párrafos de texto; los usarás frecuentemente para el marcado de contenido de texto regular.
              br
              br
              | #[b Ejemplo: ]
              br 
              br
              | #[b &lt;p&gt;Este es un simple parrafo&lt;/p&gt;] 
              br
              br
              | En la imagen lo vemos representado.

          .col-lg-6: img(src='@/assets/curso/temas/tema4/12.png', alt='')
      .bg-p.p-4.py-md-5(titulo="Listas" :icono="require('@/assets/curso/temas/tema4/17.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Mucho del contenido #[em web]  está dado por listas, así que HTML tiene elementos especiales para ellas. 
              br
              br
              | El marcado de listas se realiza siempre en al menos dos elementos. Los dos tipos de listas más comunes son las listas ordenadas y las desordenadas:
            ul.lista-ul--color
              li
                i.fas.fa-check(style="color: #362b9e ")
                | #[b Las listas desordenadas], son las que el orden de los ítems no es relevante, como en una lista de compras. Estas son encerradas en un elemento &lt;ul&gt; (#[em unordered list])
              li
                i.fas.fa-check(style="color: #362b9e ")
                | #[b Las listas ordenadas], son aquellas en las que el orden sí es relevante, como en una receta. Estas son encerradas en un elemento &lt;ol&gt; (#[em ordered list])
            p Cada elemento de la lista se coloca dentro de un elemento &lt;il&gt; (#[em list item])
              br
              br
              | En la imagen puedes ver un ejemplo de si quieres transformar parte de un párrafo en una lista y su visualización.
          .col-lg-6: img(src='@/assets/curso/temas/tema4/13.png', alt='')
      .bg-p.p-4.py-md-5(titulo="Vínculos" :icono="require('@/assets/curso/temas/tema4/18.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p Los vínculos o enlaces son muy importantes.
              br
              br
              | Para implementar un vínculo, necesitas usar un vínculo simple &lt;a&gt; la “a” es la abreviatura de la palabra inglesa «anchor» («ancla»).
              br
              | Para convertir algún texto dentro de un párrafo en un vínculo, sigue estos pasos:
              br
              | Proporcionarle al elemento &lt;a&gt; un atributo href, así:
              br
              br
              | #[b  &lt;a href=""&gt;Manifesto Mozilla&lt;/a&gt;]
              br
              | Completa el valor de este atributo con la dirección #[em web]  con la que quieras conectar al vínculo:
              br
              | #[b &lt;a href="https://www.mozilla.org/es-AR/about/manifesto/"&gt;Manifesto Mozilla&lt;/a&gt;]
              br
              | En la imagen puedes ver un ejemplo del código y su visualización.
          .col-lg-6: img(src='@/assets/curso/temas/tema4/14.png', alt='')
    p.mb-5(data-aos='fade-right') Como podemos observar el lenguaje HTML nos #[span.color-primario permite establecer la estructura de un sitio #[em web]  y colocar cada uno de sus elementos dentro de la página.]
    .row.justify-content-center.mb-5
      .col-lg-8
        p Todo este proceso debe ser llevado a cabo en un editor de código, en este caso hemos utilizado visual studio code para realizar el proceso, pero se pueden utilizar otros que están disponibles en el mercado.
        .tarjeta.color-secundario.p-4.mb-3
              .row.justify-content-center.align-items-center
                .col-lg-2.col-3: img(src='@/assets/curso/temas/atencion.svg', alt='')
                .col-lg-10
                  p.text-white En el material complementario, les compartimos un vídeo ilustrativo del uso del lenguaje HTML para que explores mucho más estas líneas de comando que permiten armar un sitio #[em web]  completo.
        p La temática de lenguaje HTML es fundamental para el desarrollo de un sitio #[em web] , el cual requiere de una cantidad de componentes para su construcción, muchas de las instrucciones en el lenguaje HTML se orientan a la creación de los espacios de trabajo con los cuales interactúa el cliente o usuario final, es importante que tanto el diseño como la construcción la ubicación de los componentes esté debidamente distribuido para no ocasionar problemas al momento de usar el sistema por parte del usuario.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/19.png', alt='')
</template>

<script>
export default {
  name: 'Tema4',
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
.bg-tema4
  background-image: url('../assets/curso/temas/tema4/bg-tema4.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
.bg-p
  background-image: url('../assets/curso/temas/tema4/bg-p.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
.tabs-b__tab
  background-color: #ece8ff
.tabs-b__tab--active
  background-color: #ffffff
</style>
