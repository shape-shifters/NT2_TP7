import Vue from 'vue'

const MIXIN = {
    computed : {
        isWinner() {
            return this.$store.state.displayMessage === 'You Picked Right!'
        },    
    },
}

Vue.mixin(MIXIN)