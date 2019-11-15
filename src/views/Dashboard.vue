<template>
  <div class="dashboard-container">
    <!-- <div class='dashboard-text'>name:{{name}}</div> -->
    <div class='dashboard-text'>name:{{name}}</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Dashboard',
  data () {
    return {
      name: 'cjyiz'
    }
  }
  // computed: {
  //   ...mapGetters(['name'])
  // }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
