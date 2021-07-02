<template>
    <div id="header" :style="{backgroundColor: isWinner ? $store.state.pickedColor : 'steelblue'}">
      <h1>The Great <br>
        <span id="colorDisplay">{{$store.state.pickedColor}}</span>
        <br>
        Guessing Game</h1>
		</div>
</template>

<script lang="js">

  export default  {
    name: 'header',
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .header {

  }
</style>
