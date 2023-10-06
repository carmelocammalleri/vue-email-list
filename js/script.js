const {createApp} = Vue;

createApp({
  data(){
    return{
      emailUno: '',
      emailDue: '',
      apriUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  }
}).mount('#app')