<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
      
      .col-lg-9
        p  Apreciado aprendiz, bienvenido a este componente formativo, donde usted podrá apropiar competencias de aprendizaje orientadas la tabulación de datos obtenidos en la investigación de mercado, clasificar la información, codificarla y aplicar herramientas que faciliten su interpretación.
          br
          br
          |Adicionalmente, con el estudio responsable de estos contenidos, usted conocerá y manejará herramientas que permiten a los coordinadores, supervisores, técnicos, mandos medios e incluso miembros de juntas directivas de las empresas, acceder a la tabulación de datos obtenidos en una investigación de mercado, contribuyendo en el crecimiento organizacional de las empresas y la generación de valor agregado en sus productos y servicios. 
        
        .row.justify-content-center
          .col-lg-10
            p El análisis de la información, generalmente, es apoyado con la ayuda de herramientas estadísticas que facilitan la interpretación de esta, teniendo en cuenta sus características, variables tamaño de la muestra, entre otros.
              br
              br
              |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
          .col-lg-2.my-4
            figure
              img(src="@/assets/curso/temas/introduccion/img2.png", alt="alt").img2-intro

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
