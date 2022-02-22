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
@font-face {
  font-family: "Outfit";
  src: url("~@/assets/fonts/Outfit-Regular.ttf") format("truetype");
}

html {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

#app {
  font-family: "Outfit", -apple-system, "Helvetica Neue", Arial, "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #000000 !important;
  overflow-x: hidden;
}

section {
  margin-top: 1em;
}

a {
  text-decoration: none !important;
}

.tooltip-inner {
  font-family: "Outfit", -apple-system, "Helvetica Neue", Arial, "Microsoft Yahei", sans-serif;
  color: #ffffff !important;
  background-color: #c531a9 !important;
}

.tooltip.bs-tooltip-top .arrow:before {
  border-top-color: #c531a9 !important;
}

</style>
