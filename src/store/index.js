import { createStore } from 'vuex'
import axios from "axios"

const folioData = "https://richtershotline.github.io/VueEOMP/data"
export default createStore({
  state: {
    jobTitle:null

  },
  getters: {
    setJobTitle(state, value) {
      state.jobTitle = value
  
      },
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
  
      },
  },
  actions: {
    async getJobTitle(context) {
      try {
        let {jobTitle} = await (await axios.get(folioData)).data
        context.commit("setJobTitle", jobTitle)
     
      }catch(e) {
  
        alert("Cannot be performed")
  
      }
  
       
  
      }
  },
  modules: {
  }
})
