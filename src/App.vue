<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

#app {
  font-family: "Josefin Sans", -apple-system, "Helvetica Neue", Arial, "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #000000 !important;
  overflow-x: hidden;
}

a {
  text-decoration: none !important;
}

.bg-black {
  background-color: #000000 !important;
}

.px-6 {
  padding-left: 6rem !important;
  padding-right: 6rem !important;
}
</style>
