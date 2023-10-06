const {createApp} = Vue;

createApp({
  data(){
    return{
      emailUno: '',
      emailDue: '',
      apriUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  },

  methods:{
    getApi(){
      axios.get(this.apriUrl)
      .then((risposta)=>{
        console.log(risposta.data);
      })
    }
  },
  
  mounted(){
    getApi()
  }
}).mount('#app')