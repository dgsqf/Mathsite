import { createApp } from 'vue/dist/vue.esm-bundler';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://asjhnsqxbnoezszjoftq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzamhuc3F4Ym5vZXpzempvZnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUyMTA4NTcsImV4cCI6MTk2MDc4Njg1N30.iUDBwXeRr4wvTzDBGAaE7bbP-AmIRJ1XSpMQ2HHjf2w'

export const supabase = createClient(supabaseUrl,supabaseAnonKey)


supabase
  .from('Problems')


  .then(response => {
    let index = Math.floor(Math.random() * response.data.length)




    createApp({
        data() {
          return {
            boolean:null,

            message:response.data[index].problem_text,
            explication:response.data[index].explication,
            

          }

        },
        methods: {
    click: function (event) {
      let answer = document.getElementById('answer')
      console.log(answer.value)
      this.boolean=answer.value==response.data[index].answer;
    },
    next: function(event){
      window.location.reload()
    }


  }
      }).mount('#app')





  })
