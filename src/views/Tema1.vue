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

    TabsD.color-acento-botones.mb-5(data-aos="fade-down")
      .row.justify-content-center.py-4.py-md-5(titulo="Contabilización" :icono="require('@/assets/curso/tema1-2-ico1-a.svg')" :icono2="require('@/assets/curso/tema1-2-ico1-b.svg')")
        .col-md-5
          h4 Contabilización
          p Hace referencia a su distribución en cuanto a cantidad.
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Carga general:</b> son las que requieren un embalaje individual.
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Carga a granel:</b> se contabiliza no en unidades, sino por criterios de masa y volumen.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema1-2-tab-1.jpg', alt='Contabilización')
      .row.justify-content-center.py-4.py-md-5(titulo="Volumen" :icono="require('@/assets/curso/tema1-2-ico2-a.svg')" :icono2="require('@/assets/curso/tema1-2-ico2-b.svg')")
        .col-md-5
          h4 Volumen
          p Hace referencia a la ocupación que requiere.
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Cargas pequeñas:</b> estas cargas generalmente están unidas por un embalaje. Se pueden coger con una sola mano.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 <b>Cargas medianas:</b>  son más grandes que las cargas pequeñas y pueden alcanzar un peso de 10 kg.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 <b>Cargas grande o estibas:</b> requieren un embalaje estandarizado, van agrupadas sobre una estiba.
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Cargas voluminosas:</b> son mercancías de grandes dimensiones.
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Cargas de dimensiones especiales:</b> se caracterizan por tener dimensiones excepcionales, grandes y casi siempre de mucho peso.        
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema1-2-tab-2.jpg', alt='Volumen') 
      .row.justify-content-center.py-4.py-md-5(titulo="Peso" :icono="require('@/assets/curso/tema1-2-ico3-a.svg')" :icono2="require('@/assets/curso/tema1-2-ico3-b.svg')")
        .col-md-5
          h4 Peso
          p Se refiere estrictamente a la clasificación de la carga por su peso.
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Cargas ligeras:</b> son cargas que no superan los 5 kg.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 <b>Cargas medianas:</b> estas cargan tienen un peso mínimo de 5 kg y máximo kg.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 <b>Cargas pesadas:</b> el peso oscila entre 25 kg y una tonelada.
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Cargas muy pesadas:</b> son cargas superiores a la tonelada.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema1-2-tab-3.jpg', alt='Peso')            
      .row.justify-content-center.py-4.py-md-5(titulo="Vida útil del producto" :icono="require('@/assets/curso/tema1-2-ico4-a.svg')" :icono2="require('@/assets/curso/tema1-2-ico4-b.svg')")
        .col-md-5
          h4 Vida útil del producto
          p Vida útil del producto: hace referencia al tiempo de caducidad.
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Carga perecedera:</b> vida útil es limitada o está determinada bajo una fecha de caducidad.
            li.mb-0 
              i.fas.fa-circle
              p.mb-0 <b>Carga No perecedera:</b> son productos cuya vida útil no condiciona la forma de transportar, recepcionar, almacenar y expedir la carga.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema1-2-tab-4.jpg', alt='Vida útil del producto')

    h3.titulo-tercero 
      span Características de la carga refrigerada

    p.mb-4(data-aos="fade") El transporte de carga refrigerada, requiere de unas condiciones específicas en el vehículo, las cuales se presentan a continuación:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.p-5.px-4
          .tarjeta-numerada__numero.num2.mb-4
            .h2 1 
          .tarjeta-numerada__img.mb-4  
            img(src='@/assets/curso/tema1-2-tarj1.svg', alt='Compresor')
          p.pt-5 <b>El compresor</b> aspira el refrigerante gaseoso y lo comprime. La presión dentro del compresor licua el gas, y el refrigerante ahora líquido desprende calor al cuerpo humano del compresor, y en última instancia al aire.  

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-botones.p-5.px-4
          .tarjeta-numerada__numero.num2.mb-4
            .h2 2
          .tarjeta-numerada__img.mb-4  
            img(src='@/assets/curso/tema1-2-tarj2.svg', alt='Compresor')  
          p.pt-5 <b>El condensador:</b> el líquido del compresor está aun subjetivamente caliente, por lo cual se bombea a un condensador; el condensador es un intercambiador de calor. El calor fluye del líquido a los muros de los tubos.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento.p-5.px-4.pb-3
          .tarjeta-numerada__numero.num2.mb-4
            .h2 3
          .tarjeta-numerada__img.mb-4  
            img(src='@/assets/curso/tema1-2-tarj3.svg', alt='Compresor')  
          p.pt-5 <b>El refrigerante,</b> habiendo cedido parte importante de su calor al condensador, se convierte en un líquido gélido bajo presión. La válvula de medición controla la proporción de refrigerante liberado en el evaporador, actuando como un acelerador para el control de la proporción de refrigeración. Al realizarlo, absorbe una gigantesca proporción de calor de sus alrededores. Aquellos alrededores son serpentines con aletas, que ayudan a transferir el calor del aire que fluye sobre las aletas al refrigerante.

    h3.titulo-tercero 
      span Manipulación de carga refrigerada

    p.mb-4(data-aos="fade") En la manipulación de la carga refrigerada es necesario considerar los siguientes aspectos:


  
</template>

<script>
import TabsD from '../components/TabsD'
export default {
  name: 'Tema1',
  components: {
    TabsD,
  },
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
