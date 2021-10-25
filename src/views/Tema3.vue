<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Tipos de Texturizado (<i>Hand</i> <i>painted</i>, <i>PBR</i>) <i>LookDev</i>

    p.mb-5 En animación, una de las etapas más importantes es la que corresponde al proceso de texturizado, que consiste en la simulación de distintos materiales a través de disposición de capas de texturas sobre los personajes y objetos 3D, con el fin de dar un aspecto mucho más realista. Con estas capas se logra dar color, volumen y detalles que acercan al objeto tridimensional lo más posible a la apariencia del objeto en la vida real; dependiendo de la cantidad de elementos repetidos y de los niveles o altura de los relieves que las componen, brindando al observador una sensación de que el objeto posee características rugosas, suaves, ásperas, blandas, viscosas, duras, filosas, entre otras; las cuales se pueden apreciar individualmente, gracias a las sombras y luces que se generan en el elemento. A continuación, podrá observar los diferentes tipos de texturizado que pueden usarse en 3D.

    div.tema3-div1.pt-5.mb-5
      .row.justify-content-center.mb-5        
        .col-lg-10
          .tema3.cajon.color-acento-contenido.py-4.px-5
            p.mb-4.px-2 Los objetos <b>3D texturizados</b> son entidades que poseen tanto geometría como datos de imagen <b>3D</b> en cada cara mostrada. 
            p.mb-0.px-2 Entre los ejemplos de objetos <b>3D texturizados</b> se incluyen edificios, aviones, mobiliario urbano y vehículos. Por lo general, se utilizan para agregar foto realismo a una vista <b>3D</b>.

      .row.justify-content-center  
        .col-lg-11
          SlyderA
            .row.justify-content-center   
              .col-lg-10
                .row.justify-content-center   
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img01.png')
                  .col-lg-7.d-flex.align-items-center
                    p Estas texturas pueden ser <b><i>naturales</i></b>; es decir, aquellas que se inspiran en la naturaleza como hojas, troncos, rocas, entre otras; o <b><i>artificiales</i></b>, las cuales provienen de objetos creados por el hombre, como latas de metal, baldosas, llantas, telas, tejidos, entre otros. 

            .row.justify-content-center   
              .col-lg-10
                .row.justify-content-center   
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img02.png')
                  .col-lg-7.d-flex.align-items-center
                    p Hay texturas geométricas con patrones geométricos que se repiten constantemente, con formas básicas, como rectángulos, cuadrados, círculos, óvalos y las texturas orgánicas, tienen elementos que se repiten de manera constante, pero tienen variación en sus formas, como líneas con curvaturas largas o cortas, como en la corteza de un árbol.

            .row.justify-content-center   
              .col-lg-10
                .row.justify-content-center   
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img03.png')
                  .col-lg-7.d-flex.align-items-center
                    p Las texturas gráficas se pueden capturar a través de una cámara fotográfica, un escáner, o recrearlos en papel a través de pintura u otros elementos, que posteriormente pueden ser capturados para ser digitalizados. Otra forma es una representación virtual del mundo real, realizados a través de <i>software</i> 2D o 3D, en la que se simulan formas geométricas, orgánicas, naturales y artificiales, con la finalidad de aplicarlas en diferentes elementos, como personajes, escenarios, props, entre otros. Dotándolos de mayor credibilidad y acercamiento al mundo real. 

            .row.justify-content-center   
              .col-lg-10
                .row.justify-content-center   
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img04.png')
                  .col-lg-7.d-flex.align-items-center
                    p Estas texturas también facilitan los acabados de los objetos, ya que las imágenes capturadas pueden repetirse infinitamente; por ejemplo, a través de un patrón repetitivo, se le puede dar textura de tela jean a una prenda de vestir, o una textura tipo madera, a una mesa simulando betas que se repiten a lo largo y ancho de esta.

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Texturizado

    p.mb-5 Para el texturizado, procedemos a sacar las <i>uvs,</i> que son las piezas aplanadas que envuelven nuestro objeto o personaje, como si de un vestido se tratase, con ello podemos ver en 2D lo que tenemos proyectado en 3D. Estas piezas cortadas y planas son las que finalmente se posicionan por medio de coordenadas en el apartado de la pestaña <i>uvs</i> en el <i>software</i> de 3D, facilitando así la aplicación de color, texturas y demás detalles. En la siguiente figura, al lado izquierdo de la imagen se puede observar un cubo 3D, con costuras de color rojo en sus filos, mientras que en la parte derecha se observa el mismo cubo dimensionado en 2D, diseccionado y abierto como una caja que se puede plegar. Si imaginamos que estas piezas se doblan y se pegan, se proyectará nuevamente el cubo, cuyos 6 lados se distinguen perfectamente en la <i>UV</i> abierta. Estas <i>uvs</i> quedan grabadas en el objeto 3D, lo que permitirá que las texturas que se vayan a aplicar, hagan uso de las coordenadas del uv <i>Mapping</i>, como se muestra en la figura 3.

    .row.justify-content-center.mb-5
      .col-lg-10
        div.BorTit.mb-3
          p.mb-0 <b>Figura 3</b>
          i Caja y uv <i>Mapping</i>
        figure
          img(src='@/assets/curso/tema3/img05.png')


    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema3/img06.png')})`}")
      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 <i>High & Low Poly</i>

      .row.justify-content-center.mb-5
        .col-lg-7
          p.mb-0 El <i>high</i> <i>poly</i> se refiere a una malla de alta densidad poligonal, sobre la cual se pueden realizar más detalles y mejores acabados gracias a que tiene mayor número de polígonos, permitiendo la creación de objetos tridimensionales con mayor calidad y mucho más realistas en comparación con los creados a partir de una <i>low</i><i> poly, </i>la cual posee menor número de polígonos y por lo tanto menos detalles y calidad. Sin embargo, a través de mapas de texturas, podemos trasladar los detalles y texturas de una malla <i>high</i> <i>poly</i> hacia una <i>low</i><i> poly, </i>haciendo que esta última se vea de mejor calidad y tan realista como la primera. Esto es bastante útil, ya que las mallas <i>high</i> <i>poly</i> son muy pesadas, lo cual dificulta su renderizado, por ello se puede hacer uso de los diferentes tipos de texturas, principalmente, el <i>Difuse</i>, el  <i>Roughness</i>, <i>normal</i> <i>map</i>, y el metal, hacía una malla <i>low</i> <i>poly</i> la cual es mucho más liviana, facilitando y ahorrando tiempo de renderizado.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/img07.png')

      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 Mapas de texturas

      p.mb-4 Los mapas de texturas son simplemente imágenes en 2D que se proyectan sobre un modelo 3D con el fin de darle una apariencia específica y más realista usando cualquier <i>software</i> 3D, ya que todos tienen la capacidad de interpretar imágenes bidimensionales. Existen 7 mapas de textura o propiedades, más comunes usados al momento de crear texturas: el mapa difuso, de desplazamiento (<i>height maps</i>) normal, especular, metallic,  <i>roughness</i>, y <i>ambient</i> <i>occlussion</i>, los cuales brindan una sensación tan parecida al modelo que es casi palpable, ya que a través de estos es posible simular distintos volúmenes, relieves, luces y sombras.
      p.mb-5 El mapeado de texturas establece cómo se sitúa la textura sobre el objeto al momento de proyectarse. Algunas texturas son tridimensionales y por lo general no necesitan un mapeo detallado ya que no se verán exactamente deformaciones o imperfectos.

      p.text-center.mb-4 <b>Los utilizados son:</b>

      LineaTiempoD.color-primario.tema3-linea
        div(numero="1" titulo="Mapa Difuso (<i>Diffuse</i> Map)")
          p.mb-5 También llamado Albedo, Color <i>Diffuse</i>, o Base color, es la textura más básica pero primordial ya que contiene la información sobre los colores que llevará nuestro modelo, los cuales pueden aplicarse partiendo de colores sencillos o de patrones elaborados hasta lograr la textura deseada, sin depender de la proyección de luces sobre éste. 
          .row.justify-content-center.mb-5
            .col-lg-9
              figure
                img(src='@/assets/curso/tema3/img08.png')

        div(numero="2" titulo="Mapa normal ( <i>Normal map</i>)")
          p.mb-5 Anteriormente se conocía como <i>Bump Map</i>, sin embargo, ha evolucionado y es considerado como uno de los más importantes al detallar un modelo ya que brinda la ilusión de profundidad y volumen a través del uso de luces y sombras para la creación de relieves falsos sin necesidad de añadir más geometría (lo cual lo haría más pesado). Esto depende de la luz, solo puede ser usado para detalles ligeros ya que, si se gira la cámara o se cambia el ángulo de iluminación, se puede perder de vista el efecto logrado. Es un mapa de base color violeta, que presenta una combinación de tres colores, que controlan los ángulos en cada uno de los ejes, rojo o red (R) para X, verde o green (G) para Y, azul o blue (B) para Z; que indican la dirección en que rebota la luz sobre el objeto, almacenando esta información en cada pixel para producir los falsos relieves.
          .row.justify-content-center.mb-5
            .col-lg-9
              figure
                img(src='@/assets/curso/tema3/img09.png')

        div(numero="3" titulo="Mapas de desplazamiento (Height maps) ")
          p.mb-5 También conocido como mapas de altura, son texturas en escala de grises que aportan un relieve real al modelo, ya que modifican y controlan su malla en dirección perpendicular a cada vértice, para producir cambios geométricos reales y perceptibles visualmente. Gracias a esto, se pueden añadir detalles más exactos ya que permiten la creación de relieves inexistentes en la malla original que brindan la sensación de profundidad y volumen sin importar el ángulo de luz que se proyecte sobre el mismo.
          .row.justify-content-center.mb-5
            .col-lg-9
              figure
                img(src='@/assets/curso/tema3/img10.png')

        div(numero="4" titulo="Mapa de rugosidad ( <i>Roughness</i> Map) ")
          p.mb-5 Básicamente define la rugosidad del objeto y las interacciones de la luz sobre su superficie. Cuando aplicamos un valor de rugosidad muy bajo o nulo, como se observa en la esfera izquierda de la Figura, la luz no se absorbe, sino que rebota ocasionando que el objeto se vea muy brillante; en cambio si aplicamos un valor de rugosidad muy alto como en la esfera del centro, la luz no rebota dando una ilusión de una superficie con textura opaca. Gracias a esto, podemos crear micro detalles como polvo, rasguños, grietas, etc., que permiten simular un desgaste o deterioro en el objeto haciendo que se vea más realista como se observa en la esfera derecha de la imagen. 
          .row.justify-content-center.mb-5
            .col-lg-9
              figure
                img(src='@/assets/curso/tema3/img11.png')

        div(numero="5" titulo="Mapa Especular (Specular Map)")
          p.mb-5 También conocido como <i>Gloss</i> <i>Map</i>, es el inverso del  <i>Roughness</i> <i>Map</i>; determina la cantidad de luz que se puede reflejar sobre la superficie de nuestro modelo dependiendo de qué tan suave o lisa sea esta. Sirve principalmente para definir la intensidad del brillo en las superficies que no son metálicas.
          .row.justify-content-center.mb-5
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img12.png')

        div(numero="6" titulo="Mapa Metálico (<i>Metallic Map</i>)")
          p.mb-5 Como su nombre lo indica, define si el objeto 3D va a tener una apariencia metálica o no. Se utiliza para simular materiales metálicos más realistas y cómo interactúa con las proyecciones de luz; además, sirve para detallar las superficies metálicas dentro de un modelo de manera que se diferencien de otros materiales.
          .row.justify-content-center.mb-5
            .col-lg-11
              figure
                img(src='@/assets/curso/tema3/img13.png')

        div(numero="7" titulo="Oclusión Ambiental (<i>Ambient</i> Occlussion)")
          p.mb-5 Es un mapa en escala de grises que determina las uniones y las partes cóncavas en el modelo, en donde la luz no llega de manera directa, sino de forma tenue, oscureciendo dichas zonas, con el fin de crear efectos de sombra que aportan mayor realismo al objeto.
          .row.justify-content-center.mb-5
            .col-lg-8
              figure
                img(src='@/assets/curso/tema3/img14.png')
          
        
    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Texturas procedurales

    p.mb-4 Las texturas procedurales son una manera interesante de agregar detalles a nuestros objetos, con ellas, podemos generar multitud de diferentes tipos de superficie de una manera aleatoria, modificando parámetros para jugar con variaciones de ellas.
    p.mb-5 Las texturas procedurales se generan mediante algoritmos matemáticos: programas a partir de los que se construye una imagen de la textura. Surgen como una forma sencilla de sintetizar texturas.
      
    .row.justify-content-center
      .col-lg-5
        a.anexo(:href="obtenerLink('/downloads/procedural <i>texture</i>s.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b><i>Procedural textures</i>.</b> Podrá contextualizar el proceso a través de este documento.
</template>

<script>
export default {
  name: 'Tema3',
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
