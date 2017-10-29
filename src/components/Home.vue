<template>
  <div></div>
</template>

<script>
import TripCard from './TripCard'
import { getHomeData } from '../modules/home'

export default {
  name: 'hello',
  data () {
    return {
      trips: []
    }
  },

  components: {
    TripCard
  },

  created () {
    this.trips = getHomeData()
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
  }

  .home {
    margin-top: 50px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }

  .trips-wrap {
    background-color: #0f0f0f;
  }

  ul {
    /*margin: 0 auto;*/
    background-color: #f0f0f0;
  }

  .trips li {
    width: auto;
    float: left;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    margin: 0 0 20px 20px;
    position: relative;
  }
</style>
