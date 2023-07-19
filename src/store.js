import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      calculatorDisplay: "",
    };
  },
  mutations: {
    setCalculatorDisplay(state, displayValue) {
      state.calculatorDisplay = displayValue;
    },
    clearCalculatorDisplay(state) {
      state.calculatorDisplay = "";
    },
  },
  actions: {
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
