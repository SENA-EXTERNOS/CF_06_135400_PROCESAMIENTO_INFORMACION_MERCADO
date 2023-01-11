<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-puzzle-piece.texto-blanco
      h1 Actividad didáctica  
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .titulo-segundo.color-acento-contenido
        h2 Tabulación de datos obtenidos en la investigación

      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        p.mb-4 Apreciado aprendiz, bienvenido a esta actividad didáctica donde usted completará las frases o ideas propuestas, digitando correctamente, en el campo dispuesto para ello, la palabra ausente. 
          br
          br
          |#[b ¡Éxitos!]
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
