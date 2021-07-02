<template>
    <div id="container">
			<ul v-for="(color, index) in $store.state.colors" :key="color.id">
         <Square v-if="isWinner"  :color="$store.state.pickedColor" :i="index" />
         <Square v-else :color="$store.state.colors[index]" :i="index" />
      </ul> 
		</div>
</template>

<script lang="js">

  import Square from './Square';

  export default  {
    name: 'main-colors',
    components: {
      Square
    },
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
  .main-colors {

  }
</style>
