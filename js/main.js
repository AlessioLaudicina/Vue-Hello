const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Forza Inter !',
        immagine: "./img/immagineVue.png"
      }
    }
  }).mount('#app')