<template>
    <div>
      <h1 class="title">Galería de Fotos</h1>
      <!-- <input v-model="searchTerm" @input="searchImages" type="text" placeholder="Buscar imágenes" /> -->
      <div class="image-list">
        <image-card v-for="image in images" :key="image.id" :image="image"></image-card>
      </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import ImageCard from './ImageCard.vue';
  
  export default {
    components: {
      ImageCard,
    },
    data() {
      return {
        // searchTerm: '',
        images: [],
      };
    },
    created(){
      this.loadImages()
    },
    methods: {
      async loadImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/photos', {
            params: {
              // query: this.searchTerm,
              per_page: 20,
              client_id: 'mxpeGUWU6H8SXAhOadAewFSAmqIvWz0qZH0Bo6pdBK4',
            },
          })
            console.log("Respuesta API",response)
          ;
          this.images = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style>
  .image-list {
    display: grid;
    grid-gap: 20px;
  }

  .title {
    text-align: center;
  }
  </style>
  