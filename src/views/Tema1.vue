<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Parámetros de codificación

    .row.justify-content-center.mb-5
      .col-7.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen').img1-tema1
      
      .col-lg-9
        p Los datos obtenidos en una investigación de mercados deben ser clasificados a partir de ciertos parámetros de codificación, los cuales responden a criterios de sistematización que facilitan su análisis e interpretación. Después, se procede al recuento de dichos datos, acorde al sistema más conveniente o probable; por lo general se usan procedimientos estadísticos y matemáticos de los datos.
          br
          br
          |Codificar datos obtenidos de una investigación de mercados consiste en establecer números a las categorías observadas o registradas de las variables que implican la base de datos. Además, está la opción de asignar código (valor numérico) a los datos faltantes, es decir, a los que aún no han sido registrados.

    .tarjeta--morada.pt-5.px-5.pb-2.mb-5
      .row.justify-content-center
        .col-lg-8
          p Ejemplo: si en el estudio se incluyó la opción de indicar el sexo al que pertenece, es necesario asignar un número a las mujeres y otro a los hombres, como se visualiza a continuación:
          ul.lista-ul--color.ps-3
            li 
              i.fas.fa-check
              p.mb-0 Mujeres.
            li 
              i.fas.fa-check
              p.mb-0 Hombres.
          p Si se trata de datos cuantitativos, se debe establecer el número de decimales que serán registrados.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen').img3-tema1




    h2 Identificación


    .row
      p En la identificación de los datos es importante definir variables de fácil interpretación en la que se haga referencia a los temas que se estén abordando. Según Bogdán, (1987):
      .col-lg-11
        .row.justify-content-center
          .col-lg-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen').img2-tema1
          .col-lg-10
            p La codificación es un modo sistemático de desarrollar y refinar las interpretaciones de los datos. El proceso de codificación incluye la reunión y análisis de todos los datos que se refieren a temas, ideas, conceptos, interpretaciones y proposiciones. Durante esta etapa del análisis, lo que inicialmente fueron ideas e intuiciones vagas se refinan, expanden, descartan o desarrollan por completo. (p.167)

      p.mt-3 Y establece cinco fases para realizar la codificación de los datos cualitativos:

    .row
      SlyderF.mb-5.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img4.png' alt='AvatarTop').mb-5
          .tarjeta.tarjeta--morada2.texto-blanco.p-4
            p.text-center.mb-5.mt-3 Iniciar redactando una lista de todos los conceptos, temas, tipologías e interpretaciones, proposiciones identificadas o producidas durante el análisis inicial para poder establecer las categorías de la codificación.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img5.png' alt='AvatarTop')
          .tarjeta.tarjeta--morada2.texto-blanco.p-4
            p.text-center.mb-5.mt-3 Codificar todos los datos que incluyan las celdas, las transcripciones, materiales y documentos, estableciendo en el margen el número o la letra correspondiente a cada categoría.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='AvatarTop')
          .tarjeta.tarjeta--morada2.texto-blanco.p-4
            p.text-center.mb-5.mt-3 Separar los datos que corresponden a los tipos y categorías de codificación.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img7.png' alt='AvatarTop')
          .tarjeta.tarjeta--morada2.texto-blanco.p-4
            p.text-center.mb-5.mt-3 Observar qué datos han sobrado. Es posible que algunos de estos se ajusten a las categorías de codificación existentes. Se pueden establecer nuevas categorías en esta fase.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img8.png' alt='AvatarTop')
          .tarjeta.tarjeta--morada2.texto-blanco.p-4
            p.text-center.mb-5.mt-3 Refinar el análisis. La codificación y clasificación de los datos permite establecer diferencias relacionadas con cada tema, concepto, proposición y, en consecuencia, ajustar los resultados.
    p.mb-5(data-aos='fade-right') La codificación de datos cualitativos, requiere tener en cuenta el seguimiento o aplicación de ciertos pasos o acciones, como las que se muestran a continuación: 

    figure.mb-5
      img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')  




    h2 Asignación de codificación

    .row.justify-content-center
      .col-lg-10
        p La asignación de la codificación requiere establecer el #[b #[em Codebook.]] Este libro de códigos o también llamado #[b Código Maestro] detalla las listas organizadas de códigos asignados a cada grupo de datos, los cuales pueden ser números o letras.
          br
          br
          | El libro de códigos incluye todas las instrucciones requeridas en la codificación y la información necesaria sobre las características definidas en el conjunto de datos. Además, orienta el trabajo de los responsables en la codificación, ayuda al investigador a identificar y establecer adecuadamente las variables. 
        
      .col-7.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen').img10-tema1

    .row.justify-content-center.mb-5
      .col-lg-11
        .row.justify-content-center
          .col-lg-2.mb-3.mt-2
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen').img11-tema1
          .col-lg-10
            h5 ¿Por qué se deben codificar los datos? 
            p.mt34 Porque establece una guía para identificar los valores que podrán asignarse a cada variable; el fin de la codificación es abreviar los grandes volúmenes de datos obtenidos, tanto cuantitativos como cualitativos, así como agrupar los datos.

        .row.justify-content-center.mt-3
          .col-lg-2.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen').img11-tema1
          .col-lg-10
            h5 ¿Y cómo se podría codificar datos cualitativos? 
            p.mt-3 Primero es necesario establecer qué se incluirá en el libro de códigos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Un libro de códigos puede contener la siguiente información:
            br
            ul.lista-ul.ps-4
              li
                i.fas.fa-angle-right
                | Número de columna.
              li
                i.fas.fa-angle-right
                | Número de registro.
              li
                i.fas.fa-angle-right
                | Número de variable.
              li
                i.fas.fa-angle-right
                | Nombre de la variable.
              li
                i.fas.fa-angle-right
                | Número de la pregunta.
              li
                i.fas.fa-angle-right
                | Instrucciones para la codificación.

    .row.justify-content-center.mb-5
      .col-lg-10
        p En el diseño de la encuesta es necesario incluir los siguientes códigos: código del entrevistador, fecha – hora y código del proyecto, demás información específica de la investigación. Es recomendable que el número de registros para cada encuestado sea el mismo y que aparezcan los mismos datos para todos los encuestados en las columnas asignadas. Se sugiere usar códigos estándar para aquellos valores faltantes, por ejemplo: usar el código 8 para una variable de una sola columna, 88 para una variable de dos columnas y así sucesivamente.
          br
          br
          |El investigador establece un código a cada respuesta obtenida y define en qué columna deben aparecer los códigos de la respuesta.
      .col-7.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen').img10-tema1



    h2 Nombres


    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen').img15-tema1
      .col-lg-10
        p Un libro de códigos establece una descripción puntual de los datos obtenidos en un estudio de investigación. Suele contener el nombre de las unidades o variables del estudio, el nivel de medición, etiquetas de valores y datos perdidos. 
          br
          br
          |En ocasiones, se incluyen análisis estadísticos descriptivos y de tendencia central, dependiendo de las variables estudiadas y, en el mejor de los casos, permiten visualizar la información por medio de cuadros o figuras.
          br
          br
          |El libro de códigos puede incluir la siguiente información:


    .row.justify-content-center.my-5
      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen').img16-tema1
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morada3")
          .row(titulo="Nombre de variable")
              p Corresponde al nombre o número asignado a cada variable en la base de datos obtenida. Algunas veces se emplean abreviaturas o patrones alfanuméricos. Es recomendable que en los datos obtenidos de encuestas se empleen números de las preguntas.

          .row(titulo="Etiqueta de variable")
              p Es una descripción simple que facilita la identificación de la variable. Si es posible, se debe emplear una parte del fraseo de la pregunta en el cuestionario.

          .row(titulo="Valores")
              p Los valores obtenidos de la variable. Ejemplo 1, 2, 3, 4, 5…
          .row(titulo="Etiquetas de valores")
              p Corresponde al texto asignado a cada uno de los valores de variable. Ejemplo: totalmente en desacuerdo, en desacuerdo, de acuerdo, indiferente, totalmente de acuerdo.

          .row(titulo="Valores perdidos")
              p En los casos que aplique, son los asignaciones y etiquetas de valores para los datos perdidos. Esto evita los posibles problemas en análisis, por lo cual es importante que estén correctamente descritos.
    .row.justify-content-center.my-5
      .tarjeta--morada.pt-5.px-5.py-4.position-relative
        .row.justify-content-center
          .col-lg-8
            p De acuerdo con la información anterior, existen algunas formas de desarrollar un libro de códigos. Es posible generarlo manualmente, sistematizando y organizando la información en un documento, sin embargo, esto puede convertirse en un proceso tedioso cuando se emplean grandes volúmenes de datos. Debido a esta situación, es posible automatizar la creación de un documento aplicando un #[em software] estadístico, como SPSS.

          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen').img17-tema1
       
    .row.my-5
      p.fw-bold  La siguiente ilustración muestra un libro de códigos para variable “V44”, en base de datos del módulo #[em Social Inequality] 2009 de ISSP.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1
      br
      span.fst-italic Libro de códigos para variable “V44”

    .row.justify-content-center.my-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')        


    h2 Etiquetas de codificación

    .row.justify-content-center.my-5
      .col-lg-11
        p En las etiquetas de codificación, las unidades se agrupan en categorías, conocidas también como niveles, opciones o casillas, por ejemplo, la variable “sexo” tiene dos opciones o categorías: masculino y femenino. Estas opciones se pueden codificar: masculino con el número 1 y femenino, con el número 2. 
        p Las categorías, según (Krippendorff, 1980) citado por (Roberto Hernandez Sampieri, 2004), pueden ser:

      .col-5.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')        

      .row.justify-content-center.my-5
        .col-lg-9
          TabsA.color-acento-contenido.mb-5        
            .tarjeta.tarjeta--azul.p-4(titulo="1. De asunto o<br> tópico")
              p Hace referencia a establecer cuál es el asunto tópico o tema tratado.
              b Ejemplo: 
              p Analizar un informe financiero
              p #[strong Categoría:] tema financiero
              b Subcategorías:
              br
              | Finanzas
              br
              | Impuestos
              br
              | Inflación

            .tarjeta.tarjeta--azul.p-4(titulo="2. De dirección")
              p En esta categoría se define cómo se está tratando un tema (¿favorable o desfavorable?, ¿positiva o negativamente?, entre otros).

                br
                br
                |#[b Ejemplo:] 
                br
                |Comparar la manera en que dos empresas abordan los cambios generados en el diseño de un producto.

                br
                br
                |#[b Categoría:] posición frente a los cambios de un producto.
                br
                |#[b Subcategoría:] 
                br
                |Favorable
                br
                |Desfavorable
                br
                |Neutral

            .tarjeta.tarjeta--azul.p-4(titulo="3. De valores")
              p Indica los valores, intereses, deseos, creencias, etc.

                br
                br
                |#[b Ejemplo:]
                br
                |Preferencias en la alimentación matutina

                br
                br
                |#[b Categoría:] Gustos y preferencias.
                br
                |#[b Subcategoría:] Muy tradicional.
                br
                |Más bien tradicional.
                br
                |Neutral.
                br
                |Más bien liberal.
                br
                |Muy liberal.

            .tarjeta.tarjeta--azul.p-4(titulo="4. De receptores")
              p Se refiere a quien van dirigidos los mensajes.
              b Ejemplo:
              p Analizar la respuesta de los clientes en las campañas de mercadeo de un producto.
              p #[strong Categoría:] Tipo de cliente
              b  Subcategoría:
              br
              | Cliente primario
              br
              | Cliente secundario
              br
              | Consumidor

            .tarjeta.tarjeta--azul.p-4(titulo="5. Físicas")
              p Son categorías para ubicar la posición y duración o extensión de una unidad de análisis.

        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen').img20-tema1


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
