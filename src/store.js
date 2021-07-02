import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        isHard: true,
        colors: [],
        pickedColor: '',
        displayMessage: ''
    },

    actions: {
        restart({commit}, hardDificulty){
            commit('changeDifficulty', hardDificulty)
            commit('changeColorCount', hardDificulty ? 6 : 3)
            commit('setColors')
            commit('setPickedColor')
            commit('setMessage', '')
        },  
        changeDifficulty({commit},hardDificulty) {
            commit('changeDifficulty', hardDificulty)
        },
        changeColorCount({commit}, count){
            commit('changeColorCount', count)
        },
        setColors({commit}){
            commit('setColors')
        },
        setPickedColor({commit}){
            commit('setPickedColor')
        },
        setMessage({commit}, message){
            commit('setMessage', message)
        },
        changeColor({commit}, i, color){
            commit('changeColor', i, color)
        },
        changeColors({commit}){
            commit('changeColors')
        }

    },

    mutations: {
        changeDifficulty(state, hardDificulty){
            state.isHard = hardDificulty
        },
        changeColorCount(state, count){
            state.colorCount = count
        },
        setColors(state){
            let arr = []
            for (let i = 0; i < this.state.colorCount; i++) {
                let newColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")" 
                arr.push(newColor)
            }
            state.colors = arr
        },
        setPickedColor(state){
            let quantity
            if (this.state.isHard) {
              quantity = 6
            } else {
              quantity = 3
            }           
            const color = this.state.colors[Math.floor(Math.random() * quantity )]
            state.pickedColor = color
        },
        setMessage(state, message){
            state.message = message
        },
        changeColor(state, i, color){
            state.colors[i] = color
        },
        changeColors(state){
            for (let i = 0; i < state.colorCount; i++) {
                state.colors[i] = state.pickedColor
            }
        }
    }
})