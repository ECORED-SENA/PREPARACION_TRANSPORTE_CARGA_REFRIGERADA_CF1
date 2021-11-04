<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')
    
    p.mb-4(data-aos="fade") Mediante el siguiente video doy la bienvenida a esta maravillosa experiencia educativa. 

    .row.justify-content-center.tarjeta.fondo-video.mb-4.py-5(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade") Según (Bernal, 2018), el transporte terrestre es: 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10  
        .bloque-texto-f.color-acento3.pt-5.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center
            .col-md-10
              h5.bloque-texto-f__texto El modo más utilizado en Colombia donde lo principal son los bienes manufacturados y después los agrícolas. Gran parte de la carga transportada es producto de exportación, carga que va desde el interior del país hacia sus principales puertos. Los costos de transporte juegan un papel determinante a la hora del precio final del bien. La cadena de suministro por el cual les toca pasar por diferentes operarios y varios tipos de transporte para llevar al destino final la carga (p.14)
          .bloque-texto-f__autor.mb-3
            .row.justify-content-center
              .col-md-10
                p.mb-0 - Bernal, 2018          

    p(data-aos="fade") El transporte de carga terrestre es el más empleado para la distribución de alimentos y productos que requieran mantener su cadena de frío para su posterior consumo. Asegurando de esta manera la inocuidad y buen estado de los mismos.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
