<template>
  <div class="calculator-container">
    <div class="calculator">
      <div class="display">{{ displayValue }}</div>
      <div class="buttons">
        <button @click="appendToDisplay('7')">7</button>
        <button @click="appendToDisplay('8')">8</button>
        <button @click="appendToDisplay('9')">9</button>
        <button @click="appendToDisplay('+')">+</button>
        <button @click="appendToDisplay('4')">4</button>
        <button @click="appendToDisplay('5')">5</button>
        <button @click="appendToDisplay('6')">6</button>
        <button @click="appendToDisplay('-')">-</button>
        <button @click="appendToDisplay('1')">1</button>
        <button @click="appendToDisplay('2')">2</button>
        <button @click="appendToDisplay('3')">3</button>
        <button @click="appendToDisplay('*')">*</button>
        <button @click="appendToDisplay('0')">0</button>
        <button @click="appendToDisplay('.')">.</button>
        <button @click="calculate()">=</button>
        <button @click="appendToDisplay('/')">/</button>
        <button @click="clearDisplay()">C</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayValue: "",
    };
  },
  methods: {
    appendToDisplay(value) {
      this.displayValue += value;
      console.log(this.displayValue)
    },
    calculate() {
      try {
        this.displayValue = eval(this.displayValue);
        const result = eval(this.displayValue);
        console.log(result)
      } catch (error) {
        this.displayValue = "Error";
      }
    },
    clearDisplay() {
      this.displayValue = "";
      console.log("Pantalla Vacia")
    },
  },
};
</script>

<style>
.calculator {
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.display {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 0 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

button {
  height: 50px;
  font-size: 18px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
}

.calculator-container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>


<!-- <template>
    <div>
      <h1>Buscar: {{ categoryName }}</h1>
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
    props: {
      categoryName: String,
    },
    data() {
      return {
        images: [],
      };
    },
    created() {
      this.loadCategoryImages();
    },
    watch: {
      categoryName: 'loadCategoryImages',
    },
    methods: {
      async loadCategoryImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: this.categoryName,
              per_page: 10,
              client_id: 'mxpeGUWU6H8SXAhOadAewFSAmqIvWz0qZH0Bo6pdBK4',
            },
          });
          this.images = response.data.results;
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  </style>
   -->

