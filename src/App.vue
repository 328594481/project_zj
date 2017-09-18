<template>
  <div id="app">
      <transition name="fade"
                  mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>


<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  .fade-enter-active,
  .fade-leave-active {
      transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }
</style>
