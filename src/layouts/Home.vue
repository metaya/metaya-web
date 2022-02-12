<template>
  <section>
    <de-navbar/>
    <router-view/>
    <de-footer/>
  </section>
</template>

<script>
import NavbarSub from '@/components/NavbarSub.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'LayoutHome',
  components: {
    'de-navbar': NavbarSub,
    'de-footer': Footer,
  },
};
</script>
