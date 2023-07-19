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

<!-- <script>
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
</script> -->

<script>
import { mapState, mapActions } from 'vuex';

export default {
  // Computed para acceder al estado de 'calculatorDisplay' almacenado en Vuex y 
  // mapearlo al componente actual. En Vuex, el estado global está disponible en el store,
  //  pero para acceder a él desde un componente, necesitas utilizar computed para hacer la conexión.
  computed: {
    ...mapState({
      displayValue: (state) => state.calculatorDisplay,
    }),
  },
  methods: {
    ...mapActions([
      'appendToDisplay',
      'calculate',
      'clearDisplay',
    ]),
  },
};
</script>

<!-- el uso del spread operator antes de mapState y mapActions es una 
  forma de simplificar y abreviar el código al propagar las propiedades 
  y métodos del almacenamiento Vuex al componente de manera más limpia y concisa. -->

   <!-- computed: {
    displayValue: mapState({
      displayValue: (state) => state.calculatorDisplay,
    }),
  },

  methods: {
    appendToDisplay: mapActions(['appendToDisplay']),
    calculate: mapActions(['calculate']),
    clearDisplay: mapActions(['clearDisplay']),
  }, -->

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
