<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de información

    .row.justify-content-center.my-5
     .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p En el análisis de información, la estadística juega un papel muy importante pues implica la recopilación, interpretación y validación de los datos. El análisis de datos estadístico representa un proceso que facilita el desarrollo de diversas operaciones estadísticas. En la investigación cuantitativa se busca cuantificar los datos en los cuales es necesario realizar un análisis estadístico, bien sean datos descriptivos, que se pueden obtener a través de las encuestas, o datos de observación.

    .row.justify-content-center.my-5
      .col-lg-8
        .row.justify-content-center
          .col-4.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
          .col-lg-10.my-3
            p En el análisis de datos estadísticos es común que se empleen herramientas estadísticas como #[em softwares] especializados que facilitan el análisis de los datos.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Métodos para el análisis de datos

    .row
      p En el análisis de información es posible aplicar métodos, que tiene relación directa con el tipo de datos que están siendo analizados. En tal sentido, se desarrollan dos métodos principales: método cuantitativo y método cualitativo. 
        br
        br
        |Pero, ¡atención! existen dos tipos de datos estadísticos:

    .tarjeta--container.row.texto-blanco.my-5
      .col-md.tarjeta.tarjeta-color1.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')         
        h2.text-center Datos continuos
        p.text-center La información continua corresponde a aquella que no puede ser contada. Por ejemplo, para medir la intensidad de una luz no es posible contarse, pero si medirse. Estos datos en estadística se distribuyen bajo la función de distribución continua.

      
      .col-md.tarjeta.tarjeta-color2.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')          
        h2.text-center Datos discretos
        p.text-center La información o datos discretos son los que pueden ser contados. Por ejemplo, se puede contar el número de productos que consume un cliente mensualmente.


    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--morada.pt-4.px-5.pb-2
          .row.justify-content-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img5-tema2

            .col-lg-8
              p La tabulación de los datos continuos y discretos, con valores distintos de la variable, se puede realizar a partir de grupos de valores de la variable en intervalos con la misma amplitud entre cada intervalo, teniendo como criterio el límite inferior que está dentro del intervalo y el límite superior fuera del intervalo. La amplitud se establece dependiendo de cada ejercicio. No se recomienda tener un número exagerado de intervalos.

    .row.mb-5
      p La siguiente ilustración ejemplifica la tabulación de datos continuos y discretos:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2

          br
          span.fst-italic  Tabulación de datos continuos y discretos
        .row.justify-content-center
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-4.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen').img8-tema2
          .col-lg-10.mt-3
            b La tabulación de datos consiste en procesar datos o información, generalmente, a través de tablas que representen con claridad y de forma condensada los resultados obtenidos en la investigación. Estos datos se organizan, lógica y sistemáticamente, en columnas y filas para facilitar su análisis estadístico.

    p La tabla que se muestra enseguida, ilustra la representación del número total de alumnos de las clases A, B y C en la escuela XYZ:

    .row.justify-content-center.my-5


      .col-lg-10.my-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          br
          span.fst-italic Representación de una tabulación en tabla
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      .col-8.col-lg-4
        p.margin-texto Mediante el análisis y comprensión de esta tabla, se puede concluir la cantidad de alumnos que existen en la escuela XYZ, clasificados por sexo.
      .col-4.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      p En los casos en los que se requiere establecer qué porcentaje representa cada grupo, sobre el total de valores, se puede analizar así:

      .col-lg-10.my-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2
            br
            span.fst-italic Representación sobre total de valores
        figure
          img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      p Para llevar a cabo el análisis de los datos obtenidos en una encuesta de satisfacción, muy frecuente en los estudios de mercadeo, se presentan ocho pasos de fácil uso: 

    LineaTiempoD.color-acento-contenido
      .row(numero="1" titulo="Primer paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Se debe definir el #[b Plan del estudio], que incluye establecer los objetivos que se espera obtener. Para ello, es importante delimitar a qué segmento se dirige el estudio y qué tipo de preguntas aportarán valor al tema a tratar.
      
      .row(numero="2" titulo="Segundo paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Consiste en establecer, claramente, qué se espera obtener del estudio. El objetivo puede ser, por ejemplo, saber qué tan satisfechos están los clientes con los productos, servicios o experiencia de marca, precio, acceso al producto, etc. Esta información servirá de parámetro para todos los análisis que siguen.

      .row(numero="3" titulo="Tercer paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Tabular los datos obtenidos. Tabulación en la cual se deberán registrar las respuestas obtenidas en el estudio de satisfacción en una tabla de Excel, cambiando las palabras por números para facilitar el análisis.
            b Ejemplo:
            ul.lista-ul.ps-4.mt-3
              li
                i.fas.fa-angle-right
                | Pregunta 1: ¿Qué tan satisfecho está con el producto A?
              li
                i.fas.fa-angle-right
                | Pregunta 2: ¿Qué tan satisfecho está con la atención recibida?
            p Ambas preguntas, pueden tener las mismas opciones de respuesta:
            ul.lista-ul.ps-4
              li
                i.fas.fa-angle-right
                | Muy satisfecho (a) — 1
              li
                i.fas.fa-angle-right
                | Algo satisfecho (a) — 2
              li
                i.fas.fa-angle-right
                | Ni satisfecho (a), ni insatisfecho (a) — 3
              li
                i.fas.fa-angle-right
                | Algo insatisfecho (a) — 4
              li
                i.fas.fa-angle-right
                | Muy insatisfecho (a) — 5
            p En la tabulación se debe asignar un número a cada opción y registrar las respuestas de cada encuestado. 
            b Ejemplo:
            .row.justify-content-center.mt-3
              .col-10
                figure
                  img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')
            
      .row(numero="4" titulo="Cuarto paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p El siguiente paso consiste en agrupar los encuestados en segmentos que sean relevantes para el estudio. Esto permitirá conocer el comportamiento y aceptación del consumidor, con base en algunos criterios como: género, edad, ingresos, ocupación, entre otros.
      
      .row(numero="5" titulo="Quinto paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Se trata de comparar las respuestas entre segmentos, ejemplo: si se espera tener información de aceptación sobre una marca de ropa nueva, se podría comparar la información obtenida entre mujeres de un rango de edad joven con las opiniones de un rango de edad superior, de esta manera se conocerán, en profundidad, las preferencias de las clientes.

      .row(numero="6" titulo="Sexto paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Consiste en observar las tendencias; se analizarán los datos obtenidos y se contrastarán con los objetivos establecidos en el plan.

      .row(numero="7" titulo="Séptimo paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p Observar las tendencias; esto favorece conocer, con mayor detalle, el comportamiento de los mercados.

      .row(numero="8" titulo="Octavo paso").p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1: img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
          .col-lg-10
            p El último paso consiste en registrar los hallazgos obtenidos en el estudio y, de allí, identificar las debilidades que tiene la empresa con el fin de ser mitigadas y reemplazadas por fortalezas.


    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Estrategias y herramientas para el análisis de datos
    .row.justify-content-center.my-5
      .col-lg-10
        p En el análisis de información existe un elemento llamado inferencia estadística, la cual consta de dos partes: estimación y pruebas de hipótesis. La estimación requiere, primordialmente, datos paramétricos, es decir, aquellos que constan de parámetros. Por otra parte, las pruebas de hipótesis son los análisis de datos no paramétricos, o sea, aquellos que no constan de parámetros.
          br
          br
          |Conozca los cinco principios básicos del análisis de información o de datos estadísticos, los cuales se presentan en el video que se muestra a continuación:
      .col-7.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen').img10-tema1


    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/bprDNbxNyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      


    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Herramientas

    .row.mb-5
      p Adicional a las estrategias de análisis estadístico, es posible aplicar o usar algunas herramientas de orden tecnológico. Estas favorecen un análisis más exacto, rápido, confiable, seguro.

    .row.justify-content-center.my-5
      .col-lg-10
        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/c10.svg', alt='Texto que describa la imagen')


          .tarjeta.color-acento-botones.p-3(x="39%" y="34%" numero="" @mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="indicadorImagenZoom")
            h3 SAS
            p SAS es un #[em software] de análisis estadístico y ofrece opciones para análisis más avanzados. Generalmente, se obtiene como una solución #[em Premium] para ser empleado en investigación de mercadeo, negocios y atención médica. También permite realizar gráficos y cuadros dignos de publicar.

          .tarjeta.color-acento-botones.p-3(x="56%" y="24%" numero="")
            h3 SPSS (IBM)
            p Es un paquete de #[em software] de estadísticas muy utilizado en la investigación. El SPSS permite analizar la capacidad de compilar estadísticas descriptivas, análisis paramétricos y no paramétricos, además de graficar los resultados.

          .tarjeta.color-acento-botones.p-3(x="72%" y="42%" numero="")
            h3 R
            p R es un #[em software] estadístico gratis y se utiliza tanto en la investigación como en otros campos. Contiene herramientas que están disponibles para una gran variedad de aplicaciones y simplifican varios aspectos del procesamiento de datos.
     
          .tarjeta.color-acento-botones.p-3(x="20%" y="64.5%" numero="")
            h3.fst-italic MATLAB
            p Es una plataforma avanzada y analítica de programación muy empleada por ingenieros y científicos.

          .tarjeta.color-acento-botones.p-3(x="50%" y="80%" numero="")
            h3.fst-italic Microsoft Excel
            p Ofrece una gran variedad de aplicaciones y herramientas para el procesamiento de datos y estadísticas simples. Es fácil de usar, además genera métricas, gráficos y figuras, lo que la convierte en una herramienta útil en el desarrollo de conceptos básicos, en el análisis estadístico.
    .row.justify-content-center.mb-5
      .col-lg-8 
        .cajon.color-secundario.p-4.mb-4(style='background-color: #f5e8f7')
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
 

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
