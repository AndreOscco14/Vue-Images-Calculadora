<template>
    <div class="image-card">
      <img :src="image.urls.regular" :alt="image.alt_description" />
      <div class="details">
        <p>Por: {{ image.user.name }}</p>
        <p>Me gusta: {{ image.likes }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: Object,
    },
  };
  </script>
  
  <style>
  .image-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  
  img {
    width: 100%;
    border-radius: 5px;
  }
  
  .details {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
  </style>
  