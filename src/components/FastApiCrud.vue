<template>
    <div class="container">
            <h1> Guardar Datos</h1>
        <form @submit.prevent="submitPost">
        <div>
            <input type="text" class="spaces" id="title" v-model="post.title" required placeholder="Title"/>
        </div>
        <div>
            <input type="text" class="spaces" id="author" v-model="post.author" required placeholder="Author"/>
        </div>
        <div>
            <input id="content" class="spaces" v-model="post.content" required placeholder="Contenido"/>
        </div>
        <div>
            <button class="buttonGuardar" type="submit">Guardar</button>
        </div>
        </form>

        <div>
            <h1> Datos </h1>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Content</th>
                </tr>
            </thead>

            <tbody>
          <tr v-for="post in datos" :key="post.id">
            <td>
              <input v-if="post.editing" v-model="post.title" />
              <span v-else>{{ post.title }}</span>
            </td>
            <td>
              <input v-if="post.editing" v-model="post.author" />
              <span v-else>{{ post.author }}</span>
            </td>
            <td>
              <input v-if="post.editing" v-model="post.content"/>
              <span v-else>{{ post.content }}</span>
            </td>
            <td>
              <template v-if="!post.editing">
                <button class="editar" @click="editPost(post)">Editar</button>
                <button class="eliminar" @click="deletePost(post.id)">Eliminar</button>
              </template>
              <template v-else>
                <button class="actualizar" @click="updatePost(post)">Actualizar</button>
              </template>
            </td>
          </tr>
        </tbody>
        </table>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue';
  import { setupStore } from '../store';

  export default defineComponent({
    setup() {
      const store = setupStore();
      const post = store.post;
      // const datos = store.datos
      const datos = computed(() => store.datos);

      console.log("Datos from Store",datos)
      // Método para cargar los datos al inicio
      const loadPosts = () => {
        try {
         store.getPosts();
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

        const editPost = (post) => {
        post.editing = true;
        };

      // Ejecutamos el método para cargar los datos al inicio
      loadPosts();

  
      const submitPost = async () => {
        try {
          await store.submitPost(post);
          post.title = '';
          post.author = '';
          post.content = '';
        } catch (error) {
          console.error('Error adding post:', error);
        }
      };
  

      const updatePost = async (post) => {
      try {
        await store.updatePost(post);
        post.editing = false;
      } catch (error) {
        console.error('Error updating post:', error);
      }
    };

    const deletePost = async (postId) => {
      try {
        await store.deletePost(postId);
        console.log("Datos eliminados")
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };

    // const datos = computed(() => {
    //   try {
    //     store.getPosts()
    //   } catch (error) {
    //     console.error('Error datos Computing'. error)
    //   }
    // })

      return {
        post,
        datos,
        submitPost,
        editPost,
        updatePost,
        deletePost
      };
    },
  });
  </script>
  

  <!-- <script>
  import axios from 'axios';
  // import { useStore } from 'pinia'; // Importa el hook useStore

  export default {
    data() {
      return {
        post: {
          id: 'string',
          title: '',
          author: '',
          content: '',
        },
        datos: []
      };
    },
    created(){
      this.getPosts()
    },
    methods: {
      // GUARDAR
      async submitPost() {
        try {
          console.log(this.post);
          await axios.post('http://localhost:8000/posts', this.post);
          // alert('Post added successfully!');
          // Limpiar el formulario después de enviar los datos
          this.post.title = '';
          this.post.author = '';
          this.post.content = '';
          this.getPosts()
        } catch (error) {
          console.error('Error adding post:', error);
        }
      },

    // MOSTRAR DATOS
      async getPosts() {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        this.datos = response.data;
        console.log("Datos guardados",response.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },

    // ELIMINADO
    async deletePost(postId) {
      try {
        await axios.delete(`http://localhost:8000/posts/${postId}`);
        this.getPosts(); // Actualizar la lista después de eliminar el post
        // alert('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },

    // ACTUALIZADO
    async updatePost(post) {
      try {
        this.post.id = post.id;
        this.post.title = post.title;
        this.post.author = post.author;
        this.post.content = post.content;
        await axios.put(`http://localhost:8000/posts/${post.id}`, this.post);
        this.getPosts(); // Actualizar la lista después de actualizar el post
        // alert('Post updated successfully!');
      } catch (error) {
        console.error('Error updating post:', error);
      }
    },

    // EDITAR
    editPost(post) {
      post.editing = true;
    },
   },
  };
  </script> -->

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttonGuardar {
  background-color: #0404048e;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.eliminar{
  background-color: #d90a0a8e;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
}

.buttonGuardar:hover {
  background-color: #9da19d;
}

.eliminar:hover{
    background-color:  #c20f0f92;
}

.actualizar {
  background-color: #0f4ade86;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
}

.actualizar:hover{
    background-color:  #2767f192;
}

.editar{
  background-color: #0f4ade86;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
}


.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #7e77775e;
}

@media (max-width: 768px) {
  .form {
    max-width: 100%;
  }
}

.spaces{
    margin: 5px;
}
</style>