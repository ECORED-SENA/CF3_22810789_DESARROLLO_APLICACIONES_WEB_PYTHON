export default {
  global: {
    componenteFormativo: 'Interfaces y mapa de navegación',
    descripcionCurso:
      'Este componente formativo brinda los conocimientos en el manejo de interfaces gráficas las cuales permiten que un usuario pueda controlar un aplicativo; por lo tanto, se trabajarán conceptos de html, css y validación de entornos gráficos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es un mapa de navegación?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Creación de mapas de navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Wireframes</em> en aplicaciones web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manejo de lenguaje HTML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo de hojas de estilo CSS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diseño de formularios y <em>front-end</em>',
        desarrolloContenidos: true,
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
      tema: 'Manejo de lenguaje HTML',
      referencia:
        'FalconMasters. (8 noviembre 2016). Curso Básico de HTML desde 0 - Introducción. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cqMfPS8jPys',
    },
    {
      tema: 'Manejo de lenguaje HTML',
      referencia:
        'Batalas, N., Khan, V. & Markopoulos, P. (2021). Executable HTML. SoftwareX, 14, 100691.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_586a5a0eb3db4106900f5bcfbc399a7c',
    },
    {
      tema: 'Manejo de hojas de estilo CSS',
      referencia:
        'Luján Castillo, J. D. (2016). HTML5, CSS y JavaScript: Crea tu web y apps con el estándar de desarrollo. Bogotá: Madrid: Alfaomega Colombiana RC Libros.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000082811',
    },
    {
      tema: 'Manejo de hojas de estilo css',
      referencia:
        'Torres Remón, M. Á. (2018). Diseño web con HTML5 y CSS3 (Primera edición).',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_ebooks0001590',
    },
  ],
  glosario: [
    {
      termino: 'Bootstrap',
      significado:
        'Es un <em>framework</em> que permite integrar estilos css desde un repositorio de internet.',
    },
    {
      termino: 'Css',
      significado:
        'Es un lenguaje que permite la creación de hojas de estilo para ubicar y mejorar el diseño de una página web.',
    },
    {
      termino: 'Formulario',
      significado:
        'Es un conjunto de controles que se agrupan para recolectar información a un posible usuario dentro de una página web.',
    },
    {
      termino: '<em>Front-end</em>',
      significado:
        'Es el nombre técnico que recibe la parte del sistema que se encarga de la interacción con el usuario final.',
    },
    {
      termino: 'Html',
      significado:
        'Lenguaje de etiquetado que permite estructurar una página web.',
    },
    {
      termino: 'Mapa de navegación',
      significado:
        'Es un documento que contiene la distribución de los elementos que conforman un sitio web y permite a un usuario realizar una navegación fácil y eficiente.',
    },
    {
      termino: '<em>Wireframe</em>',
      significado:
        'Es un boceto previo que se utiliza para negociar con un posible cliente la ubicación y despliegue de componentes en una aplicación web o móvil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Batalas, N., Khan, V., & Markopoulos, P. (2021). Executable HTML. SoftwareX, 14, 100691.',
      link: '',
    },
    {
      referencia:
        'Luján Castillo, J. (2017). HTML5, CSS y JavaScript: Crea tu web y apps con el estándar de desarrollo. Bogotá: Madrid: Alfaomega Colombiana RC Libros.',
      link: '',
    },
    {
      referencia:
        'Torres Remón, M. (2018). Diseño web con HTML5 y CSS3 (Primera edición).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
