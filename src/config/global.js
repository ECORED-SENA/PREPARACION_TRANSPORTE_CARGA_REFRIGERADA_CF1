export default {
  global: {
    componenteFormativo:
      'Fundamentos y lineamientos del transporte de carga refrigerada',
    descripcionCurso:
      'A través de la definición de los fundamentos y lineamientos del transporte de carga se establecen todas las condiciones exigidas en el transporte de alimentos refrigerados y congelados con vehículos especializados isotermos para conservar la temperatura de su carga según las normas requeridas, identificando claramente la documentación legal exigida en nuestro país y la solicitada por la organización responsable.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Fundamentos del transporte de carga refrigerada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos generales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de la carga',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medios de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Medios de transporte de carga refrigerada en Colombia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requisitos mínimos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Condiciones del transporte',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reglamentación vigente en Colombia en el transporte de carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Normatividad vigente en transporte de carga de alimentos perecederos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Contrato de transporte',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Documentos generales',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Artìculo 981. Contrato de transporte. (s.f.). Código de Comercio. Colombia.',
    },
    {
      referencia:
        'Barbaràn, D. G. (s.f.). Calificación del proceso de embalaje, transporte y distribución en la cadena de frío, como almacèn de producto terminado. Trujillo, Perù.',
    },
    {
      referencia:
        'Bernal, M. A. (2018). Transporte de carga refrigerada. Bogotá: Universidad del Rosario.',
    },
    {
      referencia:
        'Dirección de alimentos y bebidas. Invima. (s.f.). Orientaciòn tècnica para verificaciòn de temperaturas de conservaciòn de alimentos y bebidas en establecimientos competencia de las entidades territoriales de salud. Colombia.',
    },

    {
      referencia: 'Alimentos ediciones. (2015)',
      link:
        'https://www.revistaialimentos.com/ediciones/edicion-8/quien-vigila-el-transporte-refrigerado-2/',
    },
    {
      referencia:
        'Ministerio de transporte. (s.f.). Disposiciones generales para los modos de transporte. Disposiciones generales para los modos de transporte. Colombia.',
    },
    {
      referencia:
        'Ministerio de transporte. (s.f.). Ley de 1993 Disposiciones básicas del sector transporte. Ley de 1993 Disposiciones básicas del sector transporte. Colombia.',
    },
    {
      referencia:
        'Navarro, H. (2013). Logìstica en la cadena de frío. (p.13). Bogotá: Proexport.',
    },
    {
      referencia:
        'Salud, M. d. (2017). Guìa de inocuidad de alimentos y bebidas para la actividad de transporte. Subdirecciòn de Salud Nutricional, alimentos y bebidas. Bogotá, Colombia.',
    },
    {
      referencia:
        'Transporte, M. d. (2004). RESOLUCIÒN 2505 DE 2004. Colombia: Ministerio de Transporte.',
    },
    {
      referencia:
        'Transporte, M. d. (s.f.). Código de Comercio. Artículo 981. Contrato de transporte. Código de Comercio. Artículo 981. Contrato de transporte. ',
    },
  ],
  glosario: [
    {
      termino: 'Transporte Terrestre',
      significado:
        'Transporte efectuado por medios terrestres, distintos del mar y del aire.',
    },
    {
      termino: 'Contrato',
      significado:
        'Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas.',
    },
    {
      termino: '<em>Outsourcing</em>',
      significado: 'Externalización.',
    },
    {
      termino: 'Mercancía',
      significado: 'Cosa mueble que se hace objeto de trato o venta.',
    },
    {
      termino: 'Logística interna',
      significado:
        'Conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa o de un servicio, especialmente de distribución.',
    },
  ],
  complementario: [
    {
      texto:
        'Barbaràn, D. G. (s.f.). Calificación del proceso de embalaje, transporte y distribución en la cadena de frío, como almacèn de producto terminado. Trujillo, Perù.',
      tipo: 'Proyecto de grado',
      link: 'https://dspace.unitru.edu.pe/handle/UNITRU/1864',
    },
    {
      texto:
        'Dirección de alimentos y bebidas. Invima. (s.f.). Orientaciòn tècnica para verificaciòn de temperaturas de conservaciòn de alimentos y bebidas en establecimientos competencia de las entidades territoriales de salud. Colombia.',
      tipo: 'Circular',
      link:
        'https://www.invima.gov.co/documents/20143/1298143/CIRCULAR-EXTERNA-400-1395-17.pdf/601ee00c-17e4-fb31-c65c-333937f95759?t=1565720260971',
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
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ruth Leonor Reyes Villalba',
        cargo: 'Experto temático',
        centro: 'CIES <br>Regional Norte de Santander',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industria <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
