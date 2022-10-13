export default {
  global: {
    componenteFormativo: 'Tabulación de datos obtenidos en la investigación',
    descripcionCurso:
      'La tabulación es un procedimiento técnico en el cual la información obtenida en un estudio de investigación de mercados se clasifica en categorías, representando con símbolos o letras el grupo de datos, de tal manera que facilite la interpretación de estos y su codificación. Cabe destacar que es viable efectuar en forma simultánea el establecimiento de un sistema de categorías y la codificación.',
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: ' Asignación de codificación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Nombres',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Etiquetas de codificación',
            hash: 't_1_4',
          },
        ],
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
            titulo: ' Estrategias',
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
      tema: 'Codificación y tabulación de datos e información de mercados.',
      referencia:
        '<i>Editorial Tutor Formación Codificación y tabulación de datos e información de mercados.<i> (s.f.). Obtenido de Editorial tutor formación. ',
      tipo: 'Documento sitio web',
      link:
        'https://editorial.tutorformacion.es/es/index.php?controller=attachment&id_attachment=151',
    },
    {
      tema: 'Introducción a los métodos cualitativos de investigación.',
      referencia:
        '<i>Taylor, S. B. (1992). Introducción a los métodos cualitativos de investigación.<i> Paidós.',
      tipo: 'Sección de libro',
      descarga:
        'https://asodea.files.wordpress.com/2009/09/taylor-s-j-bogdan-r-metodologia-cualitativa.pdf',
    },
    {
      tema: 'Tabulación y representación gráfica de datos.',
      referencia:
        'Fernández, Josefa. Tema 1. <i>Tabulación y representación gráfica de datos. Obtenido de<i>',
      tipo: 'Documento virtual',
      descarga:
        'https://www.um.es/documents/4874468/11785083/tema-1.pdf/667f24e3-d68e-4b08-bff4-3c47d69745f5',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'Descomposición de elementos que conforman la totalidad de datos, para clasificar y reclasificar el material recogido desde diferentes puntos de vista hacia optar por el más preciso y representativo',
    },
    {
      termino: 'Concepto',
      significado:
        'Símbolo que representa las semejanzas de fenómenos por demás diversos.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'Representan la síntesis de los resultados obtenidos a lo largo del proceso de investigación.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        ' Indica la estabilidad, consistencia y exactitud de los Resultados',
    },
    {
      termino: 'Cuadro o tabla',
      significado:
        'Ordenamiento de datos numéricos en renglones y columnas que especifican la naturaleza de ciertos datos.',
    },
    {
      termino: 'Dato primario',
      significado:
        'Información reunida por el investigador directamente de la fuente.',
    },
    {
      termino: 'Dato secundario',
      significado: 'Información reunida por persona diferente al investigador.',
    },
    {
      termino: 'Descripción:',
      significado: 'Información reunida por persona diferente al investigador.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Se efectúa con base en un cuestionario y con una cédula que se debe llenar a medida que se desarrolla.',
    },
    {
      termino: 'Estudio de campo',
      significado:
        'Son investigaciones que se realizan en el medio ambiente donde se desarrolla el problema que se va a investigar.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Es la respuesta tentativa a un problema; es una proposición que se pone a prueba para terminar su validez.',
    },
    {
      termino: 'Muestreo',
      significado:
        'El conjunto de operaciones que se realizan para estudiar la distribución de determinadas características en la totalidad de una población denominada muestra.',
    },
    {
      termino: 'Observación de campo:',
      significado:
        'El conjunto de operaciones que se realizan para estudiar la distribución de determinadas características en la totalidad de una población denominada muestra.',
    },
    {
      termino: 'Tabulación',
      significado:
        'Consiste en determinar grupos, subgrupos, clases o categorías en los que puedan ser clasificadas las respuestas del cuestionario aplicado en la investigación, resumiendo los datos en tablas estadísticas.',
    },
  ],
  referencias: [
    {
      referencia: 'Libro',
      link:
        'Alfredo Baronio, S. C. (2018). <i>Saber y Saber Hacer con Estadística.<i> UniRío.',
    },
    {
      referencia: 'Libro',
      link:
        'Bogdán, T. y. (1987). <i>Introducción a los métodos cualitativos de investigación.<i> Paidós.',
    },
    {
      referencia: 'Artículo',
      link:
        'Escuela de Administración de Negocios. (2008). <i>Metodologías de la Investigación en las Ciencias Sociales. En C. L. Ibáñez, Fases, fuentes y selección de técnicas<i> (pág. 9). Revista EAN.',
    },
    {
      referencia: 'Norma',
      link:
        'ISO 27001. (2013). <i>Sistema de Gestión de Seguridad en la Información.<i>',
    },
    {
      referencia: 'Libro',
      link:
        'Krippendorff. (1980). <i>Metodología de análisis de contenido, teoría y práctica.<i> Paidós',
    },
    {
      referencia: 'Boletín',
      link:
        'Margarita Aida Cruz García. (2019). <i>Boletín Científico de las Ciencias Económico Administrativas del ICEA.<I> Obtenido de https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748 ',
    },
    {
      referencia: 'Boletín',
      link:
        'Mariela Torres, K. P. (s.f.). <i>Métodos de recolección de datos para una investigación. Boletín electrónico No. 03.<i> Facultad de Ingeniería, Universidad Rafael Landívar.',
    },
    {
      referencia: 'Libro',
      link:
        'Roberto Hernández Sampieri, C. F. (2004). <i>Metodología de la Investigación.<i> Mc Graw Hill.',
    },
    {
      referencia: 'Libro',
      link:
        'Rodríguez, I. V. (2008). <i>Metodología para la elaboración de guías de fuentes de información.<i>  Universidad Complutense de Madrid.',
    },
    {
      referencia: 'Artículo',
      link:
        'Universidad Autónoma del estado de Hidalgo. (2008). <i>Fuentes de información.<i> Obtenido de Sistema de Universidad Virtual: https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf ',
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
