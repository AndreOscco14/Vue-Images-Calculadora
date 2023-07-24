// import { createStore } from 'vuex';
// /*
//  *  Instancia de almacenamiento Vuex
//  ************************************/ 
// const store = createStore({

// // Se define estado inicial:
//   state() {
//     return {
//       calculatorDisplay: "",
//     };
//   },
//   mutations: {
//     // Las mutaciones son funciones que modifican el estado de la aplicación de
//     //  forma síncrona. Se utilizan para actualizar el estado en respuesta a acciones 
//     // realizadas por los componentes.
    
//     setCalculatorDisplay(state, displayValue) {
//       state.calculatorDisplay = displayValue;
//      const resp = displayValue
//       console.log("Respuesta",resp)
//     },
//     clearCalculatorDisplay(state) {
//       state.calculatorDisplay = "";
//       console.log("Pantalla reiniciada.")
//     },
//   },
//   actions: {
//     // Las acciones son funciones que pueden realizar operaciones asíncronas o procesar 
//     // datos antes de invocar una mutación para actualizar el estado. Se utilizan para encapsular
//     //  la lógica de negocio y se llaman desde los componentes.
//     appendToDisplay(context, value) {
//       context.commit('setCalculatorDisplay', context.state.calculatorDisplay + value);
//     },
//     calculate(context) {
//       try {
//         const result = eval(context.state.calculatorDisplay);
//         context.commit('setCalculatorDisplay', result);
//       } catch (error) {
//         context.commit('setCalculatorDisplay', "Error");
//       }
//     },
//     clearDisplay(context) {
//       context.commit('clearCalculatorDisplay');
//     },
//   },
//   getters: {
//     getDisplayValue(state) {
//       return state.calculatorDisplay;
//     },
//   },
// });

// export default store;

import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => ({
    post: {
      id: 'string',
      title: '',
      author: '',
      content: '',
    },
    datos: [],
  }),
  actions: {
    async submitPost(post) {
      try {
        await axios.post('http://localhost:8000/posts', post);
        this.getPosts();
      } catch (error) {
        console.error('Error adding post:', error);
        throw error;
      }
    },

    async getPosts() {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        this.datos = response.data;
        console.log('Datos guardados', response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },

    async deletePost(postId) {
      try {
        await axios.delete(`http://localhost:8000/posts/${postId}`);
        this.getPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
      }
    },

    async updatePost(post) {
      try {
        this.post.id = post.id;
        this.post.title = post.title;
        this.post.author = post.author;
        this.post.content = post.content;
        await axios.put(`http://localhost:8000/posts/${post.id}`, this.post);
        this.getPosts();
      } catch (error) {
        console.error('Error updating post:', error);
        throw error;
      }
    },

  },
});

export function setupStore() {
  return useStore(); // Esto devuelve una instancia del store
}