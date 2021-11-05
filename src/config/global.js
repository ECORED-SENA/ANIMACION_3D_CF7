export default {
  global: {
    componenteFormativo: 'Texturizado',
    descripcionCurso:
      'Este componente trabaja sobre las técnicas de texturizado de los elementos 3D, el <i>Bakeo</i> de mapas, a partir de los <i><i>shader</i>s</i> y de la geometría de alto poligonaje a un <i>low</i> <i>poly</i>. Así mismo, sobre los tipos de <i><i>shader</i>s</i>, y los elementos de exportación. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Herramientas de texturizado',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Backeo</i> de mapas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Tipos de Texturizado (<i>Hand</i> <i>painted</i>, <i>PBR</i>) <i>LookDev</i>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Shading</i>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tipos de archivo y Exportación',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        '<i>Blender</i>. (2021).  <i>Blender</i> 2.93 Reference Manual.',
      link: 'https://docs.Blender.org/manual/es/2.93',
    },
    {
      referencia:
        'Hemel, J. (2021).  <i>Blender</i> Secrets (1st ed.). Jan van den Hemel. Sculpting —  <i>Blender</i> Manual. (2021).',
      link:
        'https://docs.Blender.org/manual/es/2.93/sculpt_paint/sculpting/index.html ',
    },
    {
      referencia:
        'GameDevTraum (2021). Cómo exportar un modelo 3D en formato FBX con Texturas en  <i>Blender</i>.',
      link:
        'https://gamedevtraum.com/es/Blender-2-8/como-exportar-modelo-con-textura-de-Blender-a-unity/',
    },
  ],
  glosario: [
    {
      termino: 'Cóncava',
      terminoHtml: 'Cóncava',
      significado:
        'Se usa para describir una superficie que tiene una curvatura hacia adentro, presentándose más hundida o deprimida en la parte central que en las orillas.',
    },
    {
      termino: 'Dieléctricos',
      terminoHtml: 'Dieléctricos',
      significado:
        'Se refiere a objetos hechos de materiales con baja conductividad eléctrica por lo cual pueden ser utilizados como aislantes.',
    },
    {
      termino: 'Especular',
      terminoHtml: 'Especular',
      significado:
        'Hace referencia a la manera en que los rayos de luz se reflejan en una dirección predominante con el mismo ángulo con el que inciden en el objeto.',
    },
    {
      termino: 'Highpoly',
      terminoHtml: '<i>Highpoly<i>',
      significado:
        'Objeto con alta densidad poligonal, suele usarse para esculpido digital, y para la creación de  <i>normal map</i>s, no es óptimo para animación',
    },
    {
      termino: 'Lowpoly',
      terminoHtml: 'Lowpoly',
      significado:
        'Objeto con baja densidad poligonal, conveniente para usarse en animación ',
    },
    {
      termino: 'Nodos',
      terminoHtml: 'Nodos',
      significado:
        'Son un conjunto de comandos que permiten la creación y generación de texturas en función de los criterios y parámetros que se especifiquen.',
    },
    {
      termino: 'Normal map',
      terminoHtml: '<i>Normal map</i>',
      significado:
        'Técnica de generar relieve a partir de las sombras de las texturas, generando profundidad y simulación de alto poligonaje.',
    },
    {
      termino: 'Oclusión',
      terminoHtml: 'Oclusión',
      significado:
        'Se refiere a aquellas áreas y rincones en los que la luz no debería estar presente o llega de manera indirecta ocasionando que se generen sombras sobre estas.',
    },
    {
      termino: 'Pixel',
      terminoHtml: 'Pixel',
      significado:
        'Es la más pequeña de las unidades homogéneas en color que componen una imagen reproducida digitalmente o que podemos ver en la pantalla de cualquier dispositivo electrónico.',
    },
    {
      termino: 'Props',
      terminoHtml: 'Props',
      significado:
        'Son todos aquellos elementos y accesorios que hacen parte de una escena, excluyendo a los personajes, el escenario y el vestuario; los cuales sirven para dar autenticidad y lograr el ambiente requerido en cada escena.',
    },
    {
      termino: 'Renderizado',
      terminoHtml: 'Renderizado',
      significado:
        'Es el proceso de generar una imagen fotorrealista desde un modelo 3D, de manera que el ordenador interpreta la escena en tres dimensiones y la plasma en una imagen bidimensional.',
    },
    {
      termino: 'Rugosidad',
      terminoHtml: 'Rugosidad',
      significado:
        'Es una propiedad en la que se presentan un mayor o menor número de irregularidades o asperezas en la superficie de un material.',
    },
    {
      termino: 'Subdivisiones',
      terminoHtml: 'Subdivisiones',
      significado:
        'Permite a una malla de baja cantidad de polígonos, subdividir estos elementos en más cantidad, lo que permite un mejor detalle. ',
    },
    {
      termino: 'Textura',
      terminoHtml: 'Textura',
      significado:
        'Forma en que se representa la superficie de un material a través de una composición de capas que poseen múltiples efectos con el fin de generar una sensación táctil o visual..',
    },
    {
      termino: 'UV mapping',
      terminoHtml: 'UV mapping',
      significado:
        'Es el traspaso de información de un objeto 3D a un objeto 2D. ',
    },
  ],
  complementario: [
    {
      texto:
        'GaryBricks3D. (2020).  <i>Blender</i> 2.8 Cómo lograr efecto caricatura (toon <i><i>shadin</i>g</i>).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=hyhUW1Jjsns&ab_channel=GaryBricks3D',
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
      {
        nombre: 'Johnier Felipe Perafán',
        cargo: 'Experto Temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto Temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura- Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres      ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura- Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura- Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
