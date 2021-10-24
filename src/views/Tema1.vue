<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Herramientas de texturizado 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4        
        br
        br
        p.mb-0 Las herramientas de texturizado en Blender son muy variadas y disponen de varios elementos para encontrar resultados visualmente agradables y acordes a lo que buscamos, teniendo como base el arte conceptual, para ello veremos cómo generar diferentes resultados mediante el uso de mapas de textura, shaders y nodos:
        br
        br
        br

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Texturizado sin UVS (Adecuado para elementos de fondo) 
  
    p.mb-4 Para iniciar el texturizado del objeto en Blender disponemos de varias herramientas, para su óptimo uso, primero veremos cómo aplicar materiales o texturas a un objeto, sin la necesidad de uso de uvs, este método no es el más indicado, pero funciona muy bien para objetos que están de fondo, en los cuales no hay mucho tiempo para invertir. 
    p.mb-4 <b>A través del siguiente video puede consultar cómo es la aplicación del método:</b> 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo(:href="obtenerLink('/downloads/texturizado sin UVS.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Texturizado sin UVS.</b> Le invitamos a revisar este documento donde encontrará algunos de los pasos más importantes de este proceso de texturizado.
        
    .tabla-a.color-primario.mb-5 
      table    
        tbody
          tr
            th.p-5 Objetos nativos con UVS
            td.p-4(colspan=3) 
              p.mb-0 Los objetos nativos los encontramos en la pestaña ADD, como dato adicional todos ellos traen ya uvs definidas, para ver esto, simplemente agregamos un objeto al escenario y le activamos el Generated UVS, esto es muy necesario si queremos realizar modelado rápido de objetos como paredes torres y elementos simples, para que tengamos la facilidad de pintar sus texturas de manera fácil y rápida.            
          tr
            th.p-5 Generar módulos o tiles en Gimp, sin cortes o seams
            td.p-4(colspan=3)
              p.mb-4 Para generar una textura a partir de una imagen, que se repita y sin que se noten los cortes, así mismo puede ser utilizado para cubrir grandes extensiones de geometría sin generar una textura única enorme, sino, que se trabaja la unión de varias texturas más pequeñas pero que parezca un todo, utilizaremos el software de edición fotográfica y dibujo Gimp de distribución libre. 
              p.mb-4 Para entender el proceso de generar módulos o tiles en Gimp, sin corte o seams, le invitamos a consultar el siguiente video ilustrativo: 
              .video.mb-5
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              .row.justify-content-center
                .col-lg-7
                  a.anexo(:href="obtenerLink('/downloads/Tiles en Gimp.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Tiles en Gimp.</b> Adicional puede descargar y revisar en detalle el proceso a través de este documento.
          tr
            th.p-5 Agregando detalles desde editor externo (pintado de textura con Quick edit)
            td.p-4(colspan=3)
              p.mb-4 Podemos usar software externo de edición de imágenes, para agregar detalles a nuestros objetos, y pintarles elementos de color y texturas, enlazando Blender con el software de tu elección, para ello instalaremos un addon. 
              p.mb-4 Para entender el proceso de agregar desde el editor externo (pintado de textura con quick edit), le invitamos a consultar el siguiente video ilustrativo:
              .video.mb-5
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              .row.justify-content-center
                .col-lg-9
                  a.anexo(:href="obtenerLink('/downloads/quick edit.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Quick edit.</b> Además, le invitamos a consultar este documento en donde encontrará una explicación del proceso y los pasos más importantes.
          tr
            th.p-5 Pintar agua fluida con addon Flow Map
            td.p-4(colspan=3)
              p.mb-4 Blender puede utilizar plugins y addons para ampliar sus capacidades a la hora de desarrollar proyectos de animación y modelado, en este caso utilizaremos el addon Flow map, con el cual podremos crear de manera rápida y efectiva, fuentes hídricas en movimiento.
              p.mb-4 Para entender el proceso de pintar agua fluida con addon Flow Map le invitamos a consultar el siguiente video:
              .video.mb-5
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              .row.justify-content-center
                .col-lg-8
                  a.anexo(:href="obtenerLink('/downloads/flowmap.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Flowmap.</b> También le invitamos a revisar este documento, en donde encontrará el paso a paso correspondiente.

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Texturas fáciles PBR descargado y aplicado. 

    p.mb-4 Podemos utilizar texturas PBR en nuestros objetos, y cargarlas automáticamente en su respectivo nodo gracias al addon Node Wrangler. 
    p.mb-5 La instalación de addon, podrá ser consultada en los siguientes videos en donde encontrará una explicación en detalle de este proceso:

    LineaTiempoD.color-secundario.mb-5
      div(numero="1" titulo="Node Wrangler")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="2" titulo="PBR Metálico")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo(:href="obtenerLink('/downloads/pbr faciles.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>PBR fáciles.</b> Se ha dispuesto para su consulta este documento, que le ayudará a clarificar aspectos de este proceso.

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Clonar texturas de otros objetos

    p.mb-5 Podemos utilizar las texturas de un plano u objeto en nuestro escenario, para aplicarlas a otro objeto en Blender; todo esto gracias a la implementación del addon import images as planes. 

    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo(:href="obtenerLink('/downloads/clonar texturas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Clonar texturas.</b> El proceso de la clonación de texturas desde otros objetos puede ser consultado en este documento.

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Pintando texturas en programas externos

    p.mb-5 Con Blender tenemos la posibilidad de utilizar software externo de edición de imágenes, para poder pintar y/o texturizar nuestros objetos, para ello veremos el método de exportar las uvs para su implementación en el software de edición Krita. La manera de hacerlo, la veremos en el siguiente video en donde encontrará una amplia explicación al respecto:    

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-9
        a.anexo(:href="obtenerLink('/downloads/pintando en krita.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Texturizado en krita.</b> Pintar texturas desde programas externos es posible con la ayuda de Blender, le invitamos a revisar este documento con el fin de aclarar lo relacionado con la implementación de Krita.

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Mapas UV actualizados

    p.mb-5 En Blender los objetos con uvs en ocasiones pueden presentar problemas a la hora de mostrar las texturas, pero esto puede resolverse de manera sencilla activando ciertos parámetros, el método para hacerlo lo veremos en el video a continuación:

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-7
        a.anexo(:href="obtenerLink('/downloads/Mapas UV actualizados.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Mapas UV actualizados.</b> Podrá resolver dudas o usar los pasos más importantes dentro del uso de Blender en los mapas de texturas consultando este documento.


    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Proyectar esténcil con skinwrap

    p.mb-5 Con Blender podemos utilizar el addon image as planes para traer imágenes png y utilizarlos como esténcil o stickers, el método para hacerlo lo veremos en el siguiente video:

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo(:href="obtenerLink('/downloads/proyección stencil.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Proyección stencil.</b> Para una mejor comprensión del proceso, puede consultar este documento explicativo.


    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Agregar paquetes de materiales a la escena

    p.mb-5 Podemos agregar paquetes de materiales a la escena para usarlos en diferentes objetos, lo cual se vuelve muy útil, cuando debemos manejar estos en diferentes proyectos en los que estemos trabajando. 

    .row.justify-content-center.mb-5
      .col-lg-5
        a.anexo(:href="obtenerLink('/downloads/paquetes de materiales.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Paquetes de materiales.</b> Encontrará información al respecto, consultando este documento.


    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Handpainted

    p.mb-5 Para texturizar en Blender, disponemos de varios métodos, uno de ellos, es el llamativo método de handpainted que, como su nombre lo indica es una forma de pintar que parece a mano, y utilizando las herramientas de texturizado, produce un estilo visual interesante. En el siguiente video podrá observar la forma de utilizarla.

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-7
        a.anexo(:href="obtenerLink('/downloads/haindpainted.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Haindpainted.</b> Encontrará el paso a paso del proceso en este documento.



</template>

<script>
export default {
  name: 'Tema1',
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
