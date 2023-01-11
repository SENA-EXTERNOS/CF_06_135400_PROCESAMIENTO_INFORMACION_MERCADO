export default {
  global: {
    componenteFormativo: 'Tabulación de datos obtenidos en la investigación',
    descripcionCurso:
      'Este componente formativo aborda generalidades y aspectos clave sobre la tabulación: procedimiento técnico en el cual la información obtenida en un estudio de investigación de mercados, se clasifica en categorías, representando con símbolos o letras el grupo de datos, de tal manera que facilite la interpretación de los mismos y su codificación. Cabe destacar que es viable efectuar en forma simultánea el establecimiento de un sistema de categorías y la codificación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Parámetros de codificación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Métodos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: ' Estrategias',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: ' Herramientas',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Parámetros de codificación',
      referencia:
        'Editorial Tutor Formación. (s.f.). Codificación y tabulación de datos e información de mercados. ',
      tipo: 'Documento sitio web',
      link:
        'https://editorial.tutorformacion.es/es/index.php?controller=attachment&id_attachment=151',
    },
    {
      tema: 'Análisis de información',
      referencia:
        'Taylor, S. B. (1992). Introducción a los métodos cualitativos de investigación. Paidós.',
      tipo: 'Sección de libro',
      link:
        'https://asodea.files.wordpress.com/2009/09/taylor-s-j-bogdan-r-metodologia-cualitativa.pdf',
    },
    {
      tema: 'Análisis de información',
      referencia:
        'Fernández, J. (s.f.). Tema 1. Tabulación y representación gráfica de datos. ',
      tipo: 'Documento virtual',
      link:
        'https://www.um.es/documents/4874468/11785083/tema-1.pdf/667f24e3-d68e-4b08-bff4-3c47d69745f5',
    },
    {
      tema: 'Análisis de información',
      referencia:
        'Torres, M. (s.f.).Métodos de recolección de datos para una investigación. Boletín electrónico No. 03. Facultad de Ingeniería, Universidad Rafael Landívar.',
      tipo: 'Boletín',
      link:
        'http://148.202.167.116:8080/jspui/bitstream/123456789/2817/1/M%c3%a9todos%20de%20recolecci%c3%b3n%20de%20datos%20para%20una%20investigaci%c3%b3n.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'descomposición de elementos que conforman la totalidad de datos, para clasificar y reclasificar el material recogido desde diferentes puntos de vista y así optar por el más preciso y representativo.',
    },
    {
      termino: 'Concepto',
      significado:
        'símbolo que representa las semejanzas de fenómenos, por demás diversos.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'representan la síntesis de los resultados obtenidos a lo largo del proceso de investigación.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        ' indica la estabilidad, consistencia y exactitud de los resultados',
    },
    {
      termino: 'Cuadro o tabla',
      significado:
        'Ordenamiento de datos numéricos en renglones y columnas que especifican la naturaleza de ciertos datos.',
    },
    {
      termino: 'Dato primario',
      significado:
        'información reunida por el investigador directamente de la fuente.',
    },
    {
      termino: 'Dato secundario',
      significado:
        'información reunida por una persona, diferente al investigador.',
    },
    {
      termino: 'Estudio de campo',
      significado:
        'investigaciones que se realizan en el medio ambiente donde se desarrolla el problema que se va a investigar.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'respuesta tentativa a un problema; es una proposición que se pone a prueba para terminar su validez.',
    },
    {
      termino: 'Muestreo',
      significado:
        'conjunto de operaciones que se realizan para estudiar la distribución de determinadas características en la totalidad de una población, denominada muestra.',
    },
    {
      termino: 'Observación de campo',
      significado: 'se realiza en el lugar donde se da el fenómeno observado.',
    },
    {
      termino: 'Tabulación',
      significado:
        'consiste en determinar grupos, subgrupos, clases o categorías en los que puedan ser clasificadas las respuestas del cuestionario aplicado en la investigación, resumiendo los datos en tablas estadísticas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baronio, A. (2018). <em>Saber y Saber Hacer con Estadística.</em> UniRío.',
      link: '',
    },
    {
      referencia:
        'Bogdán, R. y Taylor, S. (1987). <em>Introducción a los métodos cualitativos de investigación.</em> Paidós.',
      link: '',
    },
    {
      referencia:
        'Cruz García, M. A. (2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA.</em> ',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748',
    },
    {
      referencia:
        'Escuela de Administración de Negocios. (2008).<em>Metodologías de la Investigación en las Ciencias Sociales.</em>  En C. L. Ibáñez, Fases, fuentes y selección de técnicas (pág. 9). Revista EAN.',
      link: '',
    },
    {
      referencia:
        'Hernández Sampieri, R. (2004). <em>Metodología de la Investigación.</em> Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'ISO 27001. (2013). <em>Sistema de Gestión de Seguridad en la Información.</em>',
      link: '',
    },
    {
      referencia:
        'Krippendorff. (1980).<em>Metodología de análisis de contenido, teoría y práctica.</em> Paidós',
      link: '',
    },
    {
      referencia:
        'Rodríguez, I. V. (2008). <em>Metodología para la elaboración de guías de fuentes de información.</em>  Universidad Complutense de Madrid.',
      link: '',
    },
    {
      referencia:
        'Universidad Autónoma del estado de Hidalgo. (2008). <em>Fuentes de información.</em> ',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
