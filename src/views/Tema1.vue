<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Fundamentos del transporte de carga refrigerada

    p.mb-4(data-aos="fade") El transporte de carga representa un factor de gran importancia en la economía, debido a que a través de ella se logra la distribución y logística de todo tipo de productos a sus diferentes destinos. 

    SlyderD.mb-4(:datos="datosSlyder")

    p(data-aos="fade") Este sector además enfrenta retos importantes para llegar al destino final, teniendo en cuenta el estado de las calles, carreteras y vías de acceso que en algunas ocasiones no están en buenas condiciones.

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Conceptos generales

    p.mb-4(data-aos="fade") El transporte de carga refrigerada se caracteriza por sus requerimientos específicos para el desarrollo de dicha operación, a continuación, se presentan 6 conceptos generales:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1-1-paso1.svg', alt='Texto que describa la imagen')
            .col-md-9
              p Garantizar la cadena de frío a partir del cargue en las instalaciones del productor hasta la entrega final. 
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              p Se debe mantener la temperatura.
            .col-md-2
              figure
                img(src='@/assets/curso/tema1-1-paso2.svg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1-1-paso3.svg', alt='Texto que describa la imagen')
            .col-md-9
              p Los alimentos perecederos o congelados lleguen de forma segura al consumidor.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              p Cada tipología de alimentos requiere una condiciones específicas de refrigeración.
            .col-md-2
              figure
                img(src='@/assets/curso/tema1-1-paso4.svg', alt='Texto que describa la imagen')         
          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1-1-paso5.svg', alt='Texto que describa la imagen')
            .col-md-9
              p Garantizar la calidad y seguridad de un alimento, desde su origen hasta su consumo.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              p Las instalaciones deben estar a la temperatura que requiere el producto: zonas para producto congelado, zona para producto refrigerado.
            .col-md-2
              figure
                img(src='@/assets/curso/tema1-1-paso6.svg', alt='Texto que describa la imagen')

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Tipos de carga

    p.mb-4(data-aos="fade") Existen varios tipos de carga según su contabilización, volumen, peso y vida útil como se muestra a continuación:






  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosSlyder: [
      {
        texto:
          'La entrega eficiente y el cumplimiento del día y el lugar acordados, son elementos decisorios en la satisfacción del cliente.',
        imagen: require('@/assets/curso/tema1-slide1.jpg'),
      },
      {
        texto:
          'Sin embargo, cuando se trata de mercancías que requieren conservar condiciones de temperatura para conservar su ciclo de vida.',
        imagen: require('@/assets/curso/tema1-slide2.jpg'),
      },
      {
        texto:
          'Se hace un proceso más exigente que requiere ser desarrollado bajo lineamientos y normas que garanticen la calidad y seguridad para el consumo o utilización de esos productos y mercancías. ',
        imagen: require('@/assets/curso/tema1-slide3.jpg'),
      },
    ],
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
