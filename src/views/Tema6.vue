<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diseño de formularios y front-end
    p.mb-5(data-aos='fade-right') Frontend es la parte de un sitio web que interactúa con los usuarios, por eso decimos que está del lado del cliente. Backend es la parte que se conecta con la base de datos y el servidor que utiliza dicho sitio web, por eso decimos que el backend corre del lado del servidor.
    .bg-tema6.mn.p-5.pb-2.mb-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          .tarjeta.color-secundario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3: img(src='@/assets/curso/temas/atencion.svg', alt='')
              .col-lg-10
                p.text-white El #[em Front-End] es todo lo relacionado a las interfaces y componentes de diseño mediante los cuales el usuario final del aplicativo interactúa, es importante tener en cuenta que al ser un proceso que está de cara al usuario se debe ser muy cuidadoso al no sobrecargar las vistas mediante las cuales interactúa el usuario, ya que esto podría ocasionar que este no logre realizar una correcta interpretación del uso del aplicativo y termine fracasando el proyecto debido a que el usuario no puede utilizar el sistema.
          p Existen muchas técnicas que se pueden utilizar para la construcción de front-end y es el uso de frameworks como vimos anteriormente o de hojas de estilo css, esto permite que se pueda lograr una integración entre el usuario final y el producto construido. 
            br
            br
            |En este componente también abordamos conceptos como Wireframes, los cuales #[span.color-primario permiten mostrar al usuario interesado en el producto la idea principal de lo que se requiere hacer y luego si llevarlo a producción para la entrega del producto final al usuario], este proceso aunque se puede llegar a pensar que es un retroceso por el contrario permite ir validando la satisfacción del usuario final a medida que se avanza en el producto y evitar que se construya algo que no tendrá aceptación al final de su construcción esto ahorra tiempo y dinero a las empresas.
        .col-lg-5.col-6: img(src='@/assets/curso/temas/tema6/1.png', alt='')
    p.mb-5(data-aos='fade-right') Un ejemplo de #[em front-end] es el que construimos anteriormente, el cual mostraremos a continuación para realizar un pequeño repaso sobre lo trabajado:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7 
          br
          span.fst-italic Ejemplo de Front-end
        img(src='@/assets/curso/temas/tema6/2.png', alt='')
    p.mb-5(data-aos='fade-right') A continuación, entonces, vamos a elaborar un ejemplo de construcción de un front-end para el registro de estudiantes que requieren aplicar a una beca:
    .bg-slyde.p-5.mb-4.tarjeta
      PasosB.color-secundario
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 1
            p Crearemos un archivo de HTML nuevo con su respectiva carpeta con cada uno de los elementos requeridos para su funcionamiento.
              br
              br
              |Se puede apreciar que se tiene una carpeta llamada webejemplo01 y que en esta tenemos 3 archivos, uno llamado estilos.css, imagen_registro.jpg y index.html, son los archivos que utilizaremos para la creación de nuestro formulario.
          .col-md-8: img(src='@/assets/curso/temas/tema6/3.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 2
            p Realizar la codificación de la página index.html para agregar todos los componentes requeridos.
              br
              br
              |Podemos observar la creación del archivo html que contiene la maqueta de la página y el formulario que permitirá la obtención de estos datos, tenemos varios datos a capturar e incluye una imagen que acompaña al título de nuestro formulario.
          .col-md-8: img(src='@/assets/curso/temas/tema6/4.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 3
            p Creamos el código .css que permite la ubicación y gestión de componentes en nuestro formulario.
              br
              br
              |Se aprecia la configuración que tiene en este caso la etiqueta h1 la cual utilizamos para colocar el texto principal de nuestro formulario se define el color, tipo de letra, alineación de la letra y tamaño de la letra.
          .col-md-8: img(src='@/assets/curso/temas/tema6/5.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 4
            p Ahora configuramos los botones.
              br
              br
              |En la imagen observamos la configuración que se aplica a los botones a utilizar, en este caso particular sólo tenemos un botón por lo que solo se visualizará el estilo para este en particular, pero en caso de poseer más de un botón este estilo se aplicaría a todos los demás.
          .col-md-8: img(src='@/assets/curso/temas/tema6/6.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 5
            p Ahora, en este segmento de código se refleja la configuración que tiene nuestra etiqueta div la cual contiene todos los componentes que muestra nuestro formulario en ella se definen los márgenes, tamaño del borde y de la zona donde se visualizará la información, alineación de los componentes.
          .col-md-8: img(src='@/assets/curso/temas/tema6/7.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 6
            p Este pequeño segmento de código controla el tamaño de la imagen que se encuentra acompañando al título principal del formulario que se muestra al usuario para indicar que tipo de información se requiere capturar allí como también indicarle al usuario que ha ingresado a una nueva sesión de la página.
          .col-md-8: img(src='@/assets/curso/temas/tema6/8.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 7
            p Por último, este código es para la configuración de las cajas de texto donde el usuario suministrará la información, es importante tener en cuenta que para este tipo de componentes se pueden crear varios estilos dependiendo de las necesidades, es decir, se pueden configurar por aparte y utilizar en el lugar y espacio que se requiera.
          .col-md-8: img(src='@/assets/curso/temas/tema6/9.png', alt='')
        .row(titulo="")
          .col-md-4.mb-4.mb-md-0
            h4 Paso 8
            p Luego de hacer los pasos de nuestro ejercicio, veremos el resultado final después de aplicar todos los lineamientos y comandos requeridos para la construcción de nuestro formulario.
          .col-md-8: img(src='@/assets/curso/temas/tema6/10.png', alt='')
    .row.justify-content-center
      .col-lg-2.col-5(data-aos="fade-right"): img(src='@/assets/curso/temas/tema6/11.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .tarjeta.color-secundario.p-4.mb-3
          p.mb-0.text-white Es importante tener en cuenta que las hojas de estilo son una gran ayuda al momento en el que se construyen los formularios y como se observa el resultado es bastante diferente a cuando no se aplican estos estilos.
        p Ahora, el mayor potencial que podemos sacarle a las hojas de estilo es la ubicación de componentes, los cuales hemos mencionado en repetidas ocasiones que permiten ayudar a construir interfaces que ayuden al usuario a realizar un proceso de navegación y uso del sistema de manera óptima.

</template>

<script>
export default {
  name: 'Tema6',
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
.bg-tema6
  background-image: url('../assets/curso/temas/tema6/bg-tema6.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: initial
</style>
