<template>
  <div class="home">
    <ul class="trips fn-clear">
      <li v-for="trip in trips">
        <a href="#" target="_blank" class="cover" :title="trip.title" :style="'background-image: url(' + trip.cover_url + ')'"></a>
        <a href="#" :title="trip.title" target="_blank" class="name">{{ trip.title }}</a>
        <div class="info">
          <a href="#" target="_blank" class="user" :title="trip.user.name">
            <img :src="trip.user.avatar_url" alt>
          </a>
          <p class="summary">
            <span>{{ trip.time }}</span>
            <span>{{ trip.days }}天</span>
            <span>{{ trip.view_count }}次浏览</span>
          </p>
          <p class="location">{{ trip.location }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getHomeData } from '../modules/home'

export default {
  name: 'hello',
  data () {
    return {
      trips: []
    }
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
  }

  .fn-clear {
    zoom: 1;
  }

  .trips li {
    width: 285px;
    float: left;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    margin: 0 0 20px 20px;
  }

  .trips li .cover {
    display: block;
    height: 260px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .trips li .name {
    display: block;
    height: 20px;
    font-size: 18px;
    line-height: 20px;
    color: #5c5c5c;
    padding: 0 20px 0 16px;
    margin-top: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a, a:link {
    text-decoration: none;
    transition: color .3s ease;
  }

  .trips li .info {
    padding: 0 16px 16px 14px;
    margin: 20px 0 0;
    height: 38px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
    vertical-align: baseline;
  }

  .trips li  .user {
    float: right;
  }

  .trips li .user img {
    width: 38px;
    vertical-align: bottom;
    border-radius: 38px;
    text-decoration: none;
  }

  .trips li .summary {
    margin-bottom: 12px;
  }

  .trips li .summary span {
    margin-left: 12px;
  }

  .trips li .location {

  }
</style>
