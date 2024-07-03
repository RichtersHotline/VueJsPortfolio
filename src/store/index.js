import { createStore } from 'vuex'
import axios from "axios"

const folioData = "https://richtershotline.github.io/VueEOMP/data"
export default createStore({
  state: {
    jobTitle:null,
    aboutMe:null,
skills:null,
education:null,
experiences:null

  },
  getters: {
   
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
  
      },
      setAbout(state, value) {
        state.aboutMe = value
    
        },
        setSkills(state, value) {
          state.skills = value
      
          },
          setEducation(state, value) {
            state.education = value
        
            },
            setExperiences(state, value) {
              state.experiences = value
          
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
  
       
  
      },
      async getAbout(context) {
        try {
          let {About} = await (await axios.get(folioData)).data
          context.commit("setAbout", About)
       
        }catch(e) {
    console.log("Nope")
  
    alert("Cannot be performed")

        }
      
    },
    async getSkills(context) {
      try {
        let {skills} = await (await axios.get(folioData)).data
        context.commit("setSkills", skills)
     
      }catch(e) {
    
        alert("Cannot be performed")

    
      }
    
    },  async getEducation(context) {
      try {
        let {Education} = await (await axios.get(folioData)).data
        context.commit("setEducation", Education)
     
      }catch(e) {
  
        alert("Cannot be performed")
  
      }
    
  },
  async getExperiences(context) {
    try {
      let {experiences} = await (await axios.get(folioData)).data
      context.commit("setExperiences", experiences)
   
    }catch(e) {
  
      alert("Cannot be performed")
  
    }
  
  },

  },
  modules: {
  }
})
