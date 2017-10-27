<template>
  <div class="home">
    <ul class="trips fn-clear">
      <li v-for="trip in trips">
        <TripCard v-bind:trip="trip"></TripCard>
      </li>
    </ul>
  </div>
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
  }

  .home {
    margin-top: 50px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .trips li {
    width: 30%;
    float: left;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    margin: 0 0 20px 20px;
  }
</style>
