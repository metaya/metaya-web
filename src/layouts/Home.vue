<template>
  <section>
    <de-navbar/>
    <router-view/>
  </section>
</template>

<script>
import NavbarSub from '@/components/NavbarSub.vue';

export default {
  name: 'LayoutHome',
  components: {
    'de-navbar': NavbarSub,
  },
};
</script>
