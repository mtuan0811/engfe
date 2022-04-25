<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-main>
      <div class="main_container">
        <MenuDrawer />
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import MenuDrawer from "../pages/menus/Drawer.vue";
export default {
  name: "AppLayout",
  components: { MenuDrawer },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.main_container {
  display: flex;
  height: 100%;
}
</style>