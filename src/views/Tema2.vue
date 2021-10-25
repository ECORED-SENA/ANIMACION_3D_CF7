<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 <i>Backeo</i> de mapas
    
    .row.justify-content-center.mb-5.tema2-div1
      .col-lg-9.pt-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img01.png')

    .row.justify-content-center.mb-5
      .col-lg-5
        p.mb-4  <i>Texture</i>  Baking es el proceso de grabar información relacionada con el aspecto que caracteriza un material o malla de un modelo 3D terminado, en un archivo de textura (mapa de  <i>bits</i>), para transferir fácilmente a otro modelo 3D. Gracias a este proceso, se pueden generar librerías con mapas de texturas que contienen diferentes características que describen las superficies de un modelo 3D en un espacio, incluyendo las texturas, el color, los materiales, las luces y sombras, etc.; al almacenar estos parámetros se ahorra tiempo, ya que con esta técnica se calculan con anticipación los efectos de renderizado desarrollando imágenes de archivos de textura. Evitando tener que realizar cálculos complejos para cada movimiento del modelo 3D puesto que ya están asociados a los mapas de  <i>bits</i>  que se aplicarán a las superficies del objeto en escena, asegurando un resultado bastante realista. 
        p.mb-0 Este procedimiento es realmente útil al trabajar con aplicaciones que requieren navegación espacial 3D en tiempo real ya que no se generan retrasos en cada interacción, tal como se muestra en la figura a continuación:
      .col-lg-5
        div.BorTit.mb-3
          p.mb-0 <b>Figura 1</b>
          i  <i>Texture</i>  Baking
        figure
          img(src='@/assets/curso/tema2/img02.png')
          figcaption  Nota. https://blogscopia.com/wp-content/uploads/2007/07/geishina.jpg 

    .cajon.color-acento-contenido.py-4.px-5.mb-5
      p.mb-0.px-2 Durante el <i>texture</i> <i>baking</i> se pueden guardar diferentes tipos de datos como información normal que incluye cambios en los detalles de la superficie almacenadas, como direcciones vectoriales, texturas de sombras ambientales (oclusión ambiental) texturas de efectos del color, texturas de curvaturas, coordenadas de la geometría de la malla que se guardan como texturas, etc.; los cuales son comunes y vienen preestablecidos para ser usados en diversos <i>software</i>s. Además, estos datos se pueden almacenar en conjuntos específicos que se pueden extrapolar para obtener texturizados más avanzados. 

    p.mb-5 En general, este proceso se puede realizar a través de dos métodos, el primero consiste en hacer el <i>baking</i> en una sola malla base de la cual se va a obtener la información, posteriormente guardarla como un mapa de  <i>bits</i> ; mientras que el segundo consiste en calcular la información desde una malla inicial para transferir los resultados a una malla final. Debido a que el proceso de <i>baking</i> depende esencialmente de las propiedades de la malla, es importante que ésta presente una topología limpia, es decir, debe estar libre de errores en su geometría, un ejemplo puede observarse en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        div.BorTit.mb-3
          p.mb-0 <b>Figura 2</b>
          i Proceso de <i>baking</i>
        figure
          img(src='@/assets/curso/tema2/img03.png')
          figcaption Nota. https://miro.medium.com/max/1200/1*rBrADCay0hSPJMwYIXw31Q.png

    p.mb-5 Pasar la información difusa que tiene un material, la cual está asignada a un objeto que posee una malla <i>UV</i>, lo que nos permite evitar una gran cantidad de nodos, al momento de adquirir el bake en una textura, puede ser consultado a través del siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Se pueden adquirir los detalles de alta densidad que se han realizado en un <i>high</i> <i>poly</i> a su <i>low</i> <i>poly</i> similar, esto con la finalidad de evitar la gran cantidad de vértices que tiene un objeto de alta densidad, al lado de uno de bajo poligonaje. Una explicación más amplia a este respecto, podrá consultarla a través del video que encuentra a continuación:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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

<style lang="sass" scoped></style>
