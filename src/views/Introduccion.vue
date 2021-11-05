<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-8.d-flex.align-items-center
        div.introduccion-div1.py-5
          .row.justify-content-end
            .col-lg-11.p-3
              p.mb-4 En este componente formativo, se trabajarán diversas técnicas para el texturizado de los elementos 3D, tanto de objetos sin cortes <i>UVS</i> como elementos con <i>UVS</i>; veremos también los tipos de mapas de texturas, como el <i>diffuse</i>, el <i>normal map</i>, el  <i>roughness</i>, entre otros, así como el <i>bakeo</i> de los mismos, texturas procedurales y nodulares, utilización de materiales <i>PBR</i>, manejo de técnicas de <i><i>shadin</i>g</i> y formatos de exportación.
              p.mb-4 <b>Estamos seguros que estos conocimientos serán aprovechados en su vida laboral.</b>
              p.mb-0 <b>¡Bienvenido!</b>
      .col-lg-4
        figure
          img(src='@/assets/curso/introduccion/img01.png') 
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
