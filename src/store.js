import { createStore } from 'vuex';
/*
 *  Instancia de almacenamiento Vuex
 ************************************/ 
const store = createStore({

// Se define estado inicial:
  state() {
    return {
      calculatorDisplay: "",
    };
  },
  mutations: {
    // Las mutaciones son funciones que modifican el estado de la aplicación de
    //  forma síncrona. Se utilizan para actualizar el estado en respuesta a acciones 
    // realizadas por los componentes.
    setCalculatorDisplay(state, displayValue) {
      state.calculatorDisplay = displayValue;
     const resp = displayValue
      console.log("Respuesta",resp)
    },
    clearCalculatorDisplay(state) {
      state.calculatorDisplay = "";
      console.log("Pantalla reiniciada.")
    },
  },
  actions: {
    // Las acciones son funciones que pueden realizar operaciones asíncronas o procesar 
    // datos antes de invocar una mutación para actualizar el estado. Se utilizan para encapsular
    //  la lógica de negocio y se llaman desde los componentes.
    appendToDisplay(context, value) {
      context.commit('setCalculatorDisplay', context.state.calculatorDisplay + value);
    },
    calculate(context) {
      try {
        const result = eval(context.state.calculatorDisplay);
        context.commit('setCalculatorDisplay', result);
      } catch (error) {
        context.commit('setCalculatorDisplay', "Error");
      }
    },
    clearDisplay(context) {
      context.commit('clearCalculatorDisplay');
    },
  },
  getters: {
    getDisplayValue(state) {
      return state.calculatorDisplay;
    },
  },
});

export default store;
