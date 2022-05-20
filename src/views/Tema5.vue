<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Tipos de archivo y Exportación

    div.BorTit.mb-3
      p.mb-0 <b>Figura 8</b>
      i FBX
    .row.justify-content-center.tema5-div1.pt-5.mb-5
      .col-10
        img.mb-5(src="@/assets/curso/tema5/img01.png")
        p.mb-0 Desde  <i>Blender</i>, se pueden exportar algunos tipos de archivos, y trabajar entre ellos, es muy importante tener en cuenta que, para la exportación de los objetos, se deben traer con su respectiva uv, son los FBX (fbx) <i>Wavefront</i> (.obj) como se muestra a continuación.

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img14.png')})`}")
      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 Archivos FBX (.fbx) 

      p.mb-5 Es un formato enfocado principalmente, para exportar animaciones de personajes y además es compatible con otros <i>software</i>s como <i>Autodesk</i> 3ds Max, Cinema 4D, Maya, <i>Wings</i> 3D y motores como <i>Unity</i> 3D, <i>Unreal Engine</i>. Desde  <i>Blender</i> podemos exportar nuestros modelos 3D para que conserven las texturas y poder trabajarlos en otros programas en caso de ser necesario, para ello disponemos del tipo de archivo FBX.fbx, el cual empaqueta las texturas junto al modelo, para realizar dicha exportación debemos asegurarnos en  <i>Blender</i> que nuestro modelo tiene aplicadas las texturas y materiales, luego nos vamos a <i>file-export</i> fbx y seleccionamos la opción “<i>selected objects</i>” con ello exportamos solo lo que hemos elegido, cambiamos el parámetro “<i>path mode</i>” a copy y activamos <i>embed texture</i>s, de esta manera los archivos estarán aptos para ser trasladados junto a sus texturas, como se muestra en la siguiente figura:
    
      .row.justify-content-center
        .col-lg-8
          div.BorTit.mb-3
            p.mb-0 <b>Figura 9</b>
            i FBX
          figure
            img(src='@/assets/curso/tema5/img02.png')

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 <i>Wavefront</i> (.Obj) 

    p.mb-5 El formato OBJ es estándar en la industria, sin embargo, solo tiene geometría básica y soporte de material, además mantiene la información del uv <i>Mapping</i>, este formato nos sirve para exportar e importar modelos con altas o bajas geometrías. el cual puede ser leído en <i>software</i>s como <i>Autodesk</i> 3D Max, Cinema 4D, Maya, <i>Wings</i> 3D y motores como <i>Unity</i> 3D, <i>unreal engine</i>, y <i>software</i>s de ilustración como  <i>Krita</i> , <i>Photoshop</i>, incluso en <i>After effects</i>, como se muestra en la figura 10. Cuando exportemos el objeto, primero debemos seleccionarlo, ir a <i>File, Export</i>, <i>Wavefront</i> (.obj) seleccionar, <i>selection only</i> y <i>OBJ Objects</i>.

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.png')})`}")
      .row.justify-content-center.mb-5
        .col-lg-3
          div.BorTit.mb-3
            p.mb-0 <b>Figura 10</b>
            i OBJ
          figure
            img(src='@/assets/curso/tema5/img04.png')

      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 STL

      p.mb-5 Este formato se caracteriza por importar y exportar archivos CAD, su uso comúnmente es para <i>software</i> de impresión 3D. También se caracteriza porque se puede usar para importar vectores desde <i><i>Illustrator</i></i>, <i>Corel Draw</i>, <i>Inkscape</i>.

      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 Exportación desde la UV

      p.mb-4 Desde las <i>UV</i> podemos guardar las imágenes como png, svg y eps, lo cual se puede hacer desde el uv editor, tener seleccionado el objeto que contiene su uv en modo Edición, luego ir a uv y exportar uv <i>Layout</i>.
      p.mb-0 Los PNG son el formato por defecto de  <i>Blender</i>, este formato tiene como característica, que puede guardar la información de transparencia, si es el caso que se use, esto con la finalidad de post producir la imagen, y poder hacer montajes con ella. A diferencia de los JPG que mantienen siempre la imagen completa, así el objeto renderizado tenga transparencias.
    .row.justify-content-center
      .col-lg-8
        div.BorTit.mb-3
          p.mb-0 <b>Figura 11</b>
          i Exportación desde <i>UV</i> editor
        figure
          img(src='@/assets/curso/tema5/img05.png')
</template>

<script>
export default {
  name: 'Tema5',
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
