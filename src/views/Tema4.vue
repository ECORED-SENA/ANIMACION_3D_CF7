<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Shading

    div.tema4-div1.pt-5
      .row.justify-content-center.mb-5
        .col-lg-9
          figure
            img(src='@/assets/curso/tema4/img01.png')
      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-0 Los diferentes materiales permiten controlar los atributos de un objeto, como el color, la cantidad de reflexión, la rugosidad, la transparencia, la refracción, y los juegos de luces y sombras que interactúan sobre este; creando diversas capas de texturas, de manera que la superficie de nuestro objeto tenga el aspecto que deseamos. A partir de la gran variedad de propiedades que poseen los materiales, se pueden crear diferentes estilos, desde el tipo metálico, plástico, tipo tela, cristal, humo, fuego, madera, etc., hasta estilos cartoon; tomemos, por ejemplo, la absorción de luz, si el material refleja bastante luz, nos indica que se trata de un estilo metálico o de cristal, en cambio si el material absorbe la luz y la refleja vagamente, se puede tratar de un estilo plástico o tipo tela. Por otra parte, la propiedad de volumen generada gracias a desplazamientos de la malla, permite crear estilos de humo y fuego. 

    .row.justify-content-center.mb-5
      .col-lg-7
        a.tema4.anexo(href="https://www.youtube.com/watch?v=_HlV4DUjnDY" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Video.</b> El shading o sombreado, se refiere a la representación de la percepción de profundidad en modelos 3D o ilustraciones, variando el nivel de oscuridad. Le invitamos a consultar el video tutorial de materiales en esteenlace.


    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-0 Un shader determina como un objeto es afectado por la luz, esta puede rebotar sobre el objeto, como un elemento metálico, la plata, el oro, el bronce, a diferencia de un elemento dieléctrico (material con una baja conductividad eléctrica; es decir; un aislante), en el que la luz puede rebotar, pero también refractar, es decir la luz logra atravesar el objeto. Estos objetos pueden ser el plástico, la tela, la cerámica, entre otros. El fenómeno de refracción y reflexión pueden observarse en las figuras 4, y 5.

    .row.justify-content-center.mb-5
      .col-lg-5
        div.BorTit.mb-3
          p.mb-0 <b>Figura 4</b>
          i Refracción
        figure
          img(src='@/assets/curso/tema4/img02.png')
      .col-lg-5
        div.BorTit.mb-3
          p.mb-0 <b>Figura 5</b>
          i Reflexión
        figure
          img(src='@/assets/curso/tema4/img03.png')

    p.mb-5.text-center <b>Las características principales del uso del shadin podrá verlas en detalle a continuación:</b>

    LineaTiempoD.color-primario.tema3-linea.mb-5
      div(numero="1" titulo="Background")
        p.mb-4 Usado para generar iluminación y color del fondo, tiene dos entradas, el color, que permite emitir el tipo color de luz y la fuerza que esta misma emite.  Este nodo funciona en el espacio del World surface, gracias a la luz que emiten los objetos pueden ser bañados parcialmente con su iluminación. 
        p.mb-5 Como vemos en la figura, el objeto que se encuentra en la escena es bañado por la iluminación del fondo, tinturando con algo de tonalidad roja el objeto presente en la escena.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img04.png')

      div(numero="2" titulo="Diffuse BSDF")
        p.mb-4 Un difuso permite dotar a un objeto de color, ajustando el tono, los valores y la situación del mismo, este se puede observar gracias a la incidencia de la luz directa sobre el objeto.
        p.mb-5 En la imagen se puede ver como el objeto tintura de azul en un entorno de color blanco, mantiene su tonalidad
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img05.png')
        p.mb-5 El mismo objeto con un fondo de color amarillo, se ha bañado por esa tonalidad mezclando los colores debido a la iluminación indirecta ocasionada por el fondo, mezclando las tonalidades del objeto.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img06.png')

      div(numero="3" titulo="Emission")
        p.mb-5 Este shader permite asignarle al objeto un tipo de luz propia que puede emitir con cualquier color, al cual se le puede asignar una fuerza de emisión, y así mismo puede bañar con su luz los objetos que se encuentren a su alrededor.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img07.png')

      div(numero="4" titulo="Glass BSDF")
        p.mb-5 Este shader simula el vidrio; el cual mezcla la refracción y la reflexión, haciendo uso del color blanco, para volverlo totalmente transparente, generalmente usado para elementos como vasos de cristal, y botellas, entre otros. La particularidad es que el objeto refracta más la luz que reflejarla.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img08.png')

      div(numero="5" titulo="Glossy BSDF")
        p.mb-5 A diferencia del shader glass que deja atravesar la luz, el glossy permite generar reflejos, que usualmente se pueden usar en objetos metálicos o espejos.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img09.png')

      div(numero="6" titulo="Hair BSDF")
        p.mb-5 Este shader permite generar sombreado al cabello de una forma muy sencilla, con el que se puede rotar la luz fácilmente, así mismo puede controlar la rugosidad de la luz que incide sobre el cabello.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img10.png')

      div(numero="7" titulo="Holdout")
        p.mb-5 Es un nodo que permite crear agujeros en los objetos, con una transparencia, creando un canal alfa en el escenario, Este material se puede utilizar, cuando queremos postproducir alguna información, como un texto, en ese canal alfa, o incluir una imagen, un video, o una animación. Esto lo podemos realizar en software de edición de video, fotografía o incluso directamente en Blender. 
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img11.png')

      div(numero="8" titulo="Mix shader")
        p.mb-5 Este shader permite combinar dos shaders al mismo tiempo, teniendo un factor que permite darle prioridad más a un shader que a otro, o pueden tener la misma cantidad de fuerza.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img12.png')

      
    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Principled BSDF

    p.mb-4 El principled BSDF utiliza varios nodos en un solo elemento, con sliders fáciles de manipular, para crear diferentes tipos de materiales, como puede ser: vidrio, metal, plástico, entre otros. La capa base es una mezcla controlada por el usuario entre difusión, metal, dispersión subterránea y transmisión. Además de eso, hay una capa especular, una capa de brillo y una última capa que es una capa transparente.
    p.mb-5 El nodo principled BSDF tiene varios parámetros, que se encuentran en diferentes shader, no solo en este, por ello es importante aprender a dominarlo, y mirar cada una de sus características, lo que puede facilitar la creación de diferentes materiales. Su aplicación, características y uso puede visualizarse en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img14.png')})`}")
      p.text-center <b>La siguiente figura indica cómo se encuentra el nodo en el monitor de trabajo:</b>
      .row.justify-content-center.mb-5
        .col-lg-3
          div.BorTit.mb-3
            p.mb-0 <b>Figura 6</b>
            i Principled BSDF
          figure
            img(src='@/assets/curso/tema4/img13.png')
            figcaption Nota. https://bit.ly/2ZzRXTf

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img14.png')})`}")
      p Estos tipos de modificadores, pueden ser combinados entre sí, gracias al principled BSDF, pues trabaja con elementos difusos, elementos metálicos y objetos transparentes, tal como puede observarse en la Figura 7, en donde se aprecian los tipos de combinaciones que pueden surgir de la aplicación del principled BSDF.
      .row.justify-content-center.mb-5
        .col-lg-6
          div.BorTit.mb-3
            p.mb-0 <b>Figura 7</b>
            i Principled BSDF parámetros
          figure
            img(src='@/assets/curso/tema4/img15.png')
            figcaption Nota. https://bit.ly/2ZzRXTf

      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-0 El nodo Principled BSDF está compuesto por una serie de slots a los que podemos añadir texturas especialmente preparadas. Las texturas pueden ser para el Color, Ambient Occlusion, Roughness, Metallic, Specular, Normal o Displacement, como se aprecia a continuación:

    LineaTiempoD.color-primario.tema3-linea.mb-5
      div(numero="1" titulo="Principled hair BSDF ")
        p.mb-5 Este shader se diferencia del hair, en que puede renderizar pieles y cabello, permitiendo variar las tonalidades de cada hebra, con el control de la melanina, el color, la rugosidad, la rugosidad radial, la capa, y el tinte. El abanico es muy amplio, en cuanto al comportamientos de los colores y la luz sobre el cabello, controlando así la rugosidad y el rebote. 
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img16.png')

      div(numero="2" titulo="Principled volumen")
        p.mb-5 En un solo componente se manejan varios parámetros, que permiten crear humo y fuego, los cuales se pueden renderizar gracias a un solo nodo, el cual incluye atributos que se pueden manipular como el color, la densidad del volumen, del objeto, la absorción del color, y la emisión, permite crear efectos como humo, fuego y otros.
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img17.png')

      div(numero="3" titulo="Refraction")
        p.mb-5 Se usa para agregar refracción brillante al shader glossy con distribución nítida. Es usado para materiales que transmiten luz, debe usarse en conjunto con nodos brillantes, crea en el objeto una refracción facetada. Como se observa en la imagen el tono rojo es gracias al elemento de refracción.  
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img18.png')

      div(numero="4" titulo="Subsurface scattering")
        p.mb-5 En los objetos que adquieren este material Subsurface Scattering la luz no refleja directamente en la superficie, sino que esta ingresa en esta rebotando de manera interna antes de ser absorbida, es utilizada principalmente para generar efectos de materiales como piel, cera, entre otros. El color rojo, es el que más se va dispersar en este tipo de superficie, dando una apariencia suave.
        .row.justify-content-center.mb-5
          .col-lg-8
            figure
              img(src='@/assets/curso/tema4/img19.png')

      div(numero="5" titulo="Translucent BSDF")
        p.mb-5 Este nodo se utiliza para crear una apariencia difusa o con acabado mate independientemente del ángulo desde donde se observe, haciendo uso de la reflectancia lambertiana la cual es una propiedad en la que la luz se refleja de manera uniforme en todas las direcciones.
        .row.justify-content-center.mb-5
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img20.png')

      div(numero="6" titulo="Translucent BSDF")
        p.mb-5 Este nodo se utiliza para crear una apariencia difusa o con acabado mate independientemente del ángulo desde donde se observe, haciendo uso de la reflectancia lambertiana la cual es una propiedad en la que la luz se refleja de manera uniforme en todas las direcciones.
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img21.png')

      div(numero="7" titulo="Transparent BSDF")
        p.mb-4 Es usado para dar transparencia a los objetos ocasionando que estos se vean translúcidos debido a que la luz pasa directamente a través de las superficies del objeto como si no existiera la malla
        p.mb-5 Hace que los objetos sean translúcidos a la luz: es decir, la luz pasa a través del objeto, pero se difunde en el proceso. Si el color es gris se alcanza a observar el efecto transparente, pero si es totalmente blanco, sería 100% transparente. 
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img(src='@/assets/curso/tema4/img22.png')

      div(numero="8" titulo="Velvet BSDF")
        p.mb-5 Este shader se puede utilizar para generar en las telas reflejos, es importante que este shader se utilice con otros, como el diffuse, de lo contrario no es útil. 
        .row.justify-content-center.mb-5  
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img23.png')

      div(numero="9" titulo="Volume absorption")
        p.mb-5 Este shader crea un halo a su alrededor, que muestra cómo la luz es absorbida, es muy útil para crear efectos líquidos, como el agua, vidrio pintado, incluso humo, si se combina con el nodo volume scatter.
        .row.justify-content-center.mb-5  
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img24.png')

      div(numero="10" titulo="Volume scatter")
        p.mb-5 Este shader más el nodo volume absorption, y el nodo volume scatter permite que la luz se disperse a medida que atraviesa el volumen. el uso típico sería agregar niebla a una escena. también se puede utilizar con el nodo de absorción de volumen para crear humo.
        .row.justify-content-center.mb-5  
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img25.png')

    .row.justify-content-center.mb-5  
      .col-lg-9
        p.mb-0 El Shading: <b>Outline tipo toon</b>, en Blender permite que podamos generar un tipo de visualización que asemeja a los cartoons, para esto, se pueden utilizar los diferentes parámetros y nodos y crear el resultado que se ve en las imágenes que están disponibles en el documento que se encuentra a continuación, en donde se ofrecen los pasos necesarios para obtener ese estilo visual.
      .col-lg-3.d-flex.align-items-center
        div
          a.anexo(:href="obtenerLink('/downloads/shader toon.pdf')" target="_blank" style="width:100%")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Shader toon.

    .row.justify-content-center.mb-5  
      .col-lg-8
        .tarjeta.color-primario.p-3.mb-5.tema5-div2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/img26.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Canal de YouTube
                  p.text-small.texto-blanco Si es de su interés el conocer cómo generar más estilos de toon, le invitamos a consultar el canal de YouTube de Gary Bricks 3D.
                .col-sm-auto                  
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=hyhUW1Jjsns&ab_channel=GaryBricks3D " style="background-color:#FFC200" target="_blank")
                    span Ir al canal
                    i.fab.fa-youtube
                    
      
</template>

<script>
export default {
  name: 'Tema4',
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
