<template>
    <div class="square" :style="{ background: color }" v-on:click="squareClick"></div>
</template>

<script lang="js">

  export default  {
    name: 'square',
    props: {
      color: String,
      index: Number,
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      squareClick(){
        if (this.color === this.$store.state.pickedColor) {
          this.$store.dispatch('setMessage', 'You Picked Right!');
          this.$store.dispatch('changeColors');
        } else {
          this.color = '#232323'
          this.$store.dispatch('changeColor', this.index, '#232323');
          this.$store.dispatch('setMesagge', 'Try Again!');
        }
      }
    },
    computed: {
    }
  }


</script>

<style scoped lang="css">
  .square {

  }
</style>
