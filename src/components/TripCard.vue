<template>
  <div class="trip-card">
    <a href="#" target="_blank" class="cover" :title="trip.title" :style="'background-image: url(' + trip.cover_url + ')'"></a>
    <a href="#" :title="trip.title" target="_blank" class="name">{{ trip.title }}</a>
    <div class="info">
      <a href="#" target="_blank" class="user" :title="trip.user.name">
        <img :src="trip.user.avatar_url" alt="">
      </a>
      <p class="summary">
        <span>{{ trip.time }}</span>
        <span>{{ trip.days }}天</span>
        <span>{{ trip.view_count }}次浏览</span>
      </p>
      <p class="location">{{ trip.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trip-card',
  data () {
    return {}
  },
  props: {
    trip: {}
  }
}
</script>

<style scoped>
  .cover {
    display: block;
    height: 260px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .name {
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

  .info {
    padding: 0 16px 16px 14px;
    margin: 20px 0 0;
    height: 38px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
    vertical-align: baseline;
  }

  .user {
    float: right;
  }

  .user img {
    width: 38px;
    vertical-align: bottom;
    border-radius: 38px;
    text-decoration: none;
  }

  .summary {
    margin-bottom: 12px;
  }

  .summary span {
    margin-left: 12px;
  }
</style>
