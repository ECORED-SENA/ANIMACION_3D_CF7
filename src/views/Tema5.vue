<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Tipos de archivo y Exportación

    .row.justify-content-center.tema5-div1.pt-5.mb-5
      .col-10
        img.mb-5(src="@/assets/curso/tema5/img01.png")
        p.mb-0 Desde Blender, se pueden exportar algunos tipos de archivos, y trabajar entre ellos, es muy importante tener en cuenta que, para la exportación de los objetos, se deben traer con su respectiva uv, son los FBX (fbx)Wavefront (.obj) como se muestra a continuación.

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img14.png')})`}")
      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 Archivos FBX (.fbx) 

      p.mb-5 Es un formato enfocado principalmente, para exportar animaciones de personajes y además es compatible con otros softwares como Autodesk 3ds Max, Cinema 4D, Maya, Wings 3D y motores como Unity 3D, Unreal Engine. Desde Blender podemos exportar nuestros modelos 3D para que conserven las texturas y poder trabajarlos en otros programas en caso de ser necesario, para ello disponemos del tipo de archivo FBX.fbx, el cual empaqueta las texturas junto al modelo, para realizar dicha exportación debemos asegurarnos en Blender que nuestro modelo tiene aplicadas las texturas y materiales, luego nos vamos a file-export fbx y seleccionamos la opción “selected objects” con ello exportamos solo lo que hemos elegido, cambiamos el parámetro “path mode” a copy y activamos embed textures, de esta manera los archivos estarán aptos para ser trasladados junto a sus texturas, como se muestra en la siguiente figura:
    
      .row.justify-content-center
        .col-8
          div.BorTit.mb-3
            p.mb-0 <b>Figura 8</b>
            i FBX
          figure
            img(src='@/assets/curso/tema5/img02.png')

    div.d-flex.mb-4
      div.d-flex.align-items-center
        img.blender.mt-0(src='@/assets/curso/blender.png')         
      div.ms-3.d-flex.align-items-center
        h2.my-0.py-0 Wavefront (.Obj) 

    p.mb-5 El formato OBJ es estándar en la industria, sin embargo, solo tiene geometría básica y soporte de material, además mantiene la información del uv Mapping, este formato nos sirve para exportar e importar modelos con altas o bajas geometrías. el cual puede ser leído en softwares como Autodesk 3D Max, Cinema 4D, Maya, Wings 3D y motores como Unity 3D, unreal engine, y softwares de ilustración como Krita, Photoshop, incluso en After effects, como se muestra en la figura 9. Cuando exportemos el objeto, primero debemos seleccionarlo, ir a File, Export, Wavefront (.obj) seleccionar, selection only y OBJ Objects.

    div.imagen-fondo.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.png')})`}")
      .row.justify-content-center.mb-5
        .col-3
          div.BorTit.mb-3
            p.mb-0 <b>Figura 9</b>
            i OBJ
          figure
            img(src='@/assets/curso/tema5/img04.png')

      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 STL

      p.mb-5 Este formato se caracteriza por importar y exportar archivos CAD, su uso comúnmente es para software de impresión 3D. También se caracteriza porque se puede usar para importar vectores desde Illustrator, Corel Draw, Inkscape.

      div.d-flex.mb-4
        div.d-flex.align-items-center
          img.blender.mt-0(src='@/assets/curso/blender.png')         
        div.ms-3.d-flex.align-items-center
          h2.my-0.py-0 Exportación desde la UV

      p.mb-4 Desde las UV podemos guardar las imágenes como png, vvg y eps, lo cual se puede hacer desde el uv editor, tener seleccionado el objeto que contiene su uv en modo Edición, luego ir a uv y exportar uv Layout.
      p.mb-0 Los PNG son el formato por defecto de Blender, este formato tiene como característica, que puede guardar la información de transparencia, si es el caso que se use, esto con la finalidad de post producir la imagen, y poder hacer montajes con ella. A diferencia de los JPG que mantienen siempre la imagen completa, así el objeto renderizado tenga transparencias.

    .row.justify-content-center.mb-5
      .col-8
        div.BorTit.mb-3
          p.mb-0 <b>Figura 10</b>
          i Exportación desde UV editor
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
