<template>
  <div>
    <b-navbar class="bg-black" toggleable="lg" type="dark" variant="dark">
      <de-navbar-brand class="mx-4" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-4">
          <b-nav-item class="nav-item" href="#about">About</b-nav-item>
          <b-nav-item class="nav-item" href="#howitworks">How it works</b-nav-item>
          <b-nav-item class="nav-item" href="#team">Team</b-nav-item>
          <b-nav-item class="nav-item" href="#contact">Contact us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import NavbarBrand from '@/components/NavbarBrand.vue';

export default {
  name: 'NavbarSub',
  components: {
    'de-navbar-brand': NavbarBrand,
  },
};
</script>

<style>
.navbar-dark .navbar-nav .nav-link {
  color: #ffffff !important;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #c531a9 !important;
}

.nav-item {
  margin: 0 10px;
  font-size: 20px;
}
</style>
