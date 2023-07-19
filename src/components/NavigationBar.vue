<template>
    <div class="navigation-bar">
      <router-link to="/">Galería</router-link>
      <router-link to="/r">Calculadora</router-link>
    </div>
  </template>
  
  <style>
  .navigation-bar {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
  .router-link {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }
  </style>
  