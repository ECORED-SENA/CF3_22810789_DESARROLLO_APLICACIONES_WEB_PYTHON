<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.bg-intro.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-9
          p Hoy día la industria del #[em software] ha tenido una gran evolución respecto a la manera en cómo un sistema de información se conecta con quién realiza cada operación.
            br
            br
            | Las interfaces gráficas juegan un papel importante en todo este proceso, ya que estas permiten que el usuario que utiliza el sistema pueda realizar cada una de las funciones de manera simple y sencilla.
            br
            br
            span.color-primario El siguiente video presenta las temáticas a abordar en este componente:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qqfAuQKd2Fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-3 Video. Interfaces y mapa de navegación video

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url('../assets/curso/temas/intro/bg-intro.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
