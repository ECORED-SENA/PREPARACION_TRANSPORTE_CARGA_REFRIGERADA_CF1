<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Reglamentación vigente en Colombia en el transporte de carga

    p(data-aos="fade") La vigilancia de transporte de productos cárnicos es una tarea interdisciplinaria en la cual las entidades que velan por la salud pública se apoyan y se complementan. (Ialimentos ediciones, 2015) considera los siguiente:

    Separador


    // 3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1  Normatividad vigente en transporte de carga de alimentos perecederos

    p.mb-4(data-aos="fade") En Colombia existen diferentes normas relacionadas con el transporte de carga bajo la supervisión del Ministerio de transporte. A continuación, se mencionan lineamientos para el transporte de alimentos:
  
    .row.justify-content-center.fondo-linea.mb-4.py-4(data-aos="fade-down") 
      .col-md-10
        h3.text-center Marco normativo general
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .tarjeta.color-acento-contenido.px-md-5.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.px-md-3(src="@/assets/curso/tema3-cta.svg")
            .col.text-white
              .row.justify-content-between.align-items-center
                .col.col-md-9.mb-3.mb-sm-0
                  h3.mb-1 Transporte de alimentos
                  p.mb-0.text-small Resolución 2505 de 2004 (Transporte, 
                    br
                    | Resolución 2505 DE 2004, 2004)
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Resolucion_2505_2004.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2  Contrato de transporte

    p.mb-4(data-aos="fade") El contrato de transporte consiste en un acuerdo de transportar una mercancía de un destino a otro por determinado medio y tiempo determinado a cambio de un precio. Una de las partes se obliga para con la otra.

    .tarjeta--container.row(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3-2-ico1.svg', alt='Texto que describa la imagen')          
        p.text-center Este contrato se debe regir bajo las reglas legales vigentes. Actualmente en Colombia se aplica el Código de Comercio. Artículo 981. Contrato de transporte (Artículo 981. Contrato de transporte).

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3-2-ico2.svg', alt='Texto que describa la imagen')
        p.text-center “En el evento en que el contrato o alguna de sus cláusulas sea ineficaz y se hayan ejecutado prestaciones, se podrá solicitar la intervención del juez a fin de que impida que una parte se enriquezca a expensas de la otra”.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3-2-ico3.svg', alt='Texto que describa la imagen') 
        p.text-center El contrato de transporte es de carácter bilateral, es decir deben existir obligaciones entre ambas partes. En (Artículo 981. Contrato de transporte) mencionan algunas obligaciones del transportador: en el transporte de cosas a recibirlas, conducirlas y entregarlas en el estado en que las reciba, las cuales se presumen en buen estado, salvo constancia en contrario (p.1)

    Separador


    // 3.3
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3  Documentos generales

    p.mb-4(data-aos="fade") En el desarrollo de la operación del transporte de carga es necesario contar con algunos documentos legales obligatorios en nuestro país, como los que se presentan a continuación:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.p-5.px-4
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center Tarjeta de Registro Nacional de Transporte de Carga  
          p.text-center Reemplaza a la tarjeta de operación. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-botones.p-5.px-4
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center Manifiesto de carga
          p.text-center Se ampara ante las autoridades de tránsito el transporte de mercancías y, por ello, debe ser portado por el conductor durante todo el recorrido.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento.p-5.px-4
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center Remesa terrestre de carga
          p.text-center  El cliente o destinatario deja constancia del recibido de la mercancía.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-primario.p-5.px-4
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center Titularidad
          p.text-center el conductor del vehículo deberá exhibir a la autoridad de tránsito y transporte que se lo solicite, la correspondiente factura de compraventa de la mercancía y/o remisión, que demuestre que su titularidad corresponde a quien hace este transporte.    
    
    p.mb-4(data-aos="fade") Estos documentos deben ser portados durante todo el desplazamiento del transporte de la carga, conforme a los lineamientos legales vigentes en el transporte de carga.

    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/tema3-3-infografia.svg', alt='Fundamentos y lineamientos del transporte de carga refrigerada')

    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosLineaTiempoB: [
      {
        titulo:
          'Código de Comercio artículos 981 a 1035 Contrato de Transporte',
        texto:
          '(Transporte, Código de Comercio. Artículo 981. Contrato de transporte)',
        icono: require('@/assets/curso/tema3-1-ico-linea.svg'),
      },
      {
        titulo: 'Ley 105 de 1993 Disposiciones Básicas Sector Transporte.',
        texto:
          'Por la cual se dictan disposiciones básicas sobre el transporte, se redistribuyen competencias y recursos entre la Nación y las Entidades Territoriales, se reglamenta la planeación en el sector transporte y se dictan otras disposiciones. (Ministerio de transporte)',
        icono: require('@/assets/curso/tema3-1-ico-linea.svg'),
      },
      {
        titulo:
          'Ley 336 de 1996 Disposiciones Generales para los Modos de Transporte.',
        texto: '(Ministerio de transporte)',
        icono: require('@/assets/curso/tema3-1-ico-linea.svg'),
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
