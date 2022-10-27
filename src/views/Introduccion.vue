<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
      
      .col-lg-9.my-5
        p #[strong Bienvenido al componente de Tabulación de datos obtenidos en la investigación, del programa Procesamiento de Información de Mercados, el cual propende por el desarrollo de un buen proceso formativo de acuerdo con las competencias de aprendizaje orientadas a tabular los datos obtenidos en la investigación de mercado, clasificar la información, codificarla y aplicar herramientas que faciliten su interpretación.]
        
        .row.justify-content-center
          .col-lg-10
            p #[strong Adicionalmente, busca brindar herramientas que permitan a los coordinadores, supervisores, técnicos, mandos medios e incluso miembros de juntas directivas de las empresas, acceder a la tabulación de datos obtenidos en una investigación de mercado, contribuyendo en el crecimiento organizacional de las empresas y la generación de valor agregado en sus productos y servicios. El análisis de la información generalmente es apoyado con la ayuda de herramientas estadísticas que facilitan la interpretación de esta, teniendo en cuenta sus características, variables tamaño de la muestra, entre otros.]
          .col-lg-2.my-4
            figure
              img(src="@/assets/curso/temas/introduccion/img2.png", alt="alt").img2-intro

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https:" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    
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
