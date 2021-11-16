<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Medios de transporte
    
    p.mb-4(data-aos="fade") Para cada situación, hay diversos tipos de transportes, es decir, diversos tipos de camiones con los que se optimiza la actividad de transporte frigorífico para los alimentos adecuados. A continuación, se detallan los medios de transporte de carga más utilizados.

    .row(data-aos="fade-down")
      .col-lg-4.mb-3.mb-md-0
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema2-tarj1.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Transporte aéreo
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Transporte aéreo
              p.mb-0 Es el transporte más rápido y más costoso para el transporte de mercancías. Puede utilizarse para cargas perecederas con ciclo de vida corta.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema2-tarj2.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Transporte terrestre
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Transporte terrestre
              p.mb-0 Es el medio más utilizado para el transporte de mercancías perecederas. Permite acceder directamente al cliente final y puede llegar hacer la opción más económica.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema2-tarj3.jpg')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Transporte marítimo
          .tarjeta-foto-hover__tarjeta.bg-primario.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Transporte marítimo
              p.mb-0 Permite trasladar mercancías de un puerto a otro entre países de largas distancias. Puede llegar a tardar más tiempo que los demás medios de transporte.

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Medios de transporte de carga refrigerada en Colombia

    p.mb-4(data-aos="fade") Existen los siguientes medios transporte de carga refrigerada:

    TabsA.color-acento-contenido(data-aos="fade-down")
      .tarjeta.color-acento3--borde.p-4.row.justify-content-center(titulo="Camión frigorífico")
        .col-md-5
          h4 Camión frigorífico
          p Transporte que tiene una fuente de frío para mantener los alimentos a una determinada temperatura, que oscila entre los 7 y los -20 grados, en función del tipo de vehículo.
        .col-md-6
          img(src='@/assets/curso/tema2-1-tab1.jpg', alt='Camión frigorífico')
      .tarjeta.color-acento3--borde.p-4.row.justify-content-center(titulo="Camión isotermo")
        .col-md-5
          h4 Camión isotermo
          p La caja de este de este vehículo es especial, pues dispone de paredes aislantes, que mantiene la temperatura del camión, impidiendo que el calor afecte a los alimentos que contienen.
        .col-md-6
          img(src='@/assets/curso/tema2-1-tab2.jpg', alt='Camión isotermo')
      .tarjeta.color-acento3--borde.p-4.row.justify-content-center(titulo="Camión refrigerante")
        .col-md-5
          h4 Camión refrigerante
          p En este transporte el sistema de refrigeración es capaz de mantener temperaturas que van desde los 12 grados a los 20 grados negativos, según el tipo de vehículo como la marca o el modelo.
        .col-md-6
          img(src='@/assets/curso/tema2-1-tab3.jpg', alt='Camión refrigerante')
      .tarjeta.color-acento3--borde.p-4.row.justify-content-center(titulo="Camión calorífico")
        .col-md-5
          h4 Camión calorífico
          p También existen camiones que mantienen el calor a una temperatura superior a doce grados.
        .col-md-6
          img(src='@/assets/curso/tema2-1-tab4.jpg', alt='Camión calorífico')         

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Requisitos mínimos

    p.mb-4(data-aos="fade") Los vehículos de transporte de alimentos, en el territorio colombiano, deben cumplir con una serie de requisitos mínimos, de acuerdo al Código de Comercio, en el cual se aclaran las condiciones que debe cumplir el vehículo para el transporte de carga refrigerada.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.color-acento3.p-4
        .row.justify-content-center
          .col-md-3.col-6.mb-md-0.mb-4
            img.px-md-3(src='@/assets/curso/tema2-2-ico.svg', alt='Icono decorativo')
          .col-md-8  
            p.mb-0 En este caso, se debe hacer cumplimiento de los requisitos consagrados en la resolución 2505 de 2004 del Ministerio de Transporte “Por la cual se reglamentan las condiciones que deben cumplir los vehículos para transportar carne, pescado o alimentos fácilmente corruptibles” (Transporte, Resoluciòn 2505 DE 2004, 2004)

    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3  Condiciones de transporte

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Los alimentos y productos en general que requieran transportarse bajo condiciones específicas de temperatura es decir refrigerados o congelados, deben contar con las condiciones adecuadas que garanticen el buen estado de estas mercancías para su posterior consumo, Además es importante llevar los registros de temperatura del vehículo durante el transporte de los mismos.
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-3-img.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade") Según la “Guía de inocuidad de alimentos y bebidas para la actividad de transporte”  (Salud, 2017) afirma:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-acento3.py-5.py-md-0
        .row.justify-content-center.align-items-center
          .col-md-8.mb-md-0.mb-4
            .bloque-texto-f.pt-md-3.pt-5.px-4.py-md-3.py-2
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              .row.justify-content-center
                .col-md-10
                  h5.bloque-texto-f__texto Para la actividad de transporte de alimentos y bebidas y sus materias primas es importante tener en cuenta lo siguiente: los alimentos y materias primas que por su naturaleza requieran mantenerse refrigerados o congelados deben ser transportados y distribuidos bajo condiciones que aseguren y garanticen el mantenimiento de las condiciones de refrigeración o congelación hasta su destino final (p.5)
              .bloque-texto-f__autor.mb-3
                .row.justify-content-center.mb-0
                  .col-md-10.mb-0
                    p.mb-0 - Salud, 2017
          .col-md-4.col-8.p-0
            img(src='@/assets/curso/tema2-3-ico.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-acento-contenido.py-4
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema2-3-ico2.svg', alt='Imagen decorativa')
          .col-md-5  
            p Los sistemas de registro e indicadores, les permiten a los medios de transporte que posean sistema de refrigeración o congelación, garantizar el mantenimiento de las temperaturas requeridas para la conservación de los alimentos y sus materias primas.
            .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/Vocaroo_10jP7zgAk14a.mp3' type='audio/mp3')
                  |  Your browser does not support the audio tag.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
