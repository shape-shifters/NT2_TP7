<template>
    <div id="navigator">
			<button id="reset" v-on:click="reset"> {{ restartButton }}</button>
			<span id="message"> {{ $store.state.displayMessage }}</span>

			<button id="easy" v-on:click="handleDificultyChanged(false)" :class="{'selected': !$store.state.isHard}">easy</button>
			<button id="hard" v-on:click="handleDificultyChanged(true)" :class="{'selected': $store.state.isHard}">hard</button>
		</div>
</template>

<script>

  export default  {
    name: 'navigator',
    mounted () {

    },
    data () {
      return {

      }
    },
    
    methods: {

      handleDificultyChanged(isHard){
        if (this.$store.state.isHard !== isHard) {
          this.$store.dispatch('restart', isHard)
        }
      },

      reset() {
        this.$store.dispatch('restart', this.$store.state.isHard)
      },

    },

    computed: {

      restartButton: function () {
        return this.$store.state.displayMessage === 'You Picked Right!' ? 'Play Again!' : 'New colors!'
      }
    }
  }


</script>

<style scoped lang="css">
  .navigator {

  }
</style>
