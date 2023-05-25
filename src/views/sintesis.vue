<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Con el tiempo se ha tenido una gran evolución respecto a la manera en cómo un sistema de información se conecta con quién realiza cada operación.
      br
      br
      |Las interfaces gráficas juegan un papel importante en todo este proceso, ya que estas permiten, desde su conceptualización, aprobación e implementación, lograr la creación de cualquier aplicativo de manera simple y sencilla.
      br
      br
      |A través de este contenido formativo se pudo obtener los conocimientos en el manejo de estas interfaces gráficas que permitirán que los usuarios puedan controlar cualquier aplicativo que se desarrolle, resumiendo lo aprendido de la siguiente manera:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
