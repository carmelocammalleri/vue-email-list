const {createApp} = Vue;

createApp({
  data(){
    return{

      //Array vuoto per accogliere gli elementi che si creano con il ciclo
      emails: [],
      apriUrl: "https://flynn.boolean.careers/exercises/api/random/mail?min=1&max=10"
    }
  },

  methods:{
    getApi(){
      // ciclo che generi 10 emails
      for(let i=0; i<10; i++){

        // creazione singolo elemento randomico
        axios.get(this.apriUrl)
        .then((risposta)=>{

          //pusho il singolo elemento all'interno dell'array principale "emails"
          this.emails.push(risposta.data.response)
          console.log(risposta.data.response);
      })
      }
    }
  },

  mounted(){
    // richiama la funzione e la monta sull'HTML
    this.getApi()
    console.log(this.emails);
  }
}).mount('#app')