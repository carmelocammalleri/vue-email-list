const {createApp} = Vue;

createApp({
  data(){
    return{
      emails: [],
      apriUrl: "https://flynn.boolean.careers/exercises/api/random/mail?min=1&max=10"
    }
  },

  methods:{
    getApi(){
      for(let i=0; i<10; i++){
        axios.get(this.apriUrl)
        .then((risposta)=>{
          this.emails.push(risposta.data.response)
          console.log(risposta.data.response);
      })
      }
    }
  },

  mounted(){
    this.getApi()
    console.log(this.emails);
  }
}).mount('#app')