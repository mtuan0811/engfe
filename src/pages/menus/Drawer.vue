<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <router-link
        v-for="item in items"
        :key="item.title"
        :to="{ name: item.name }"
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MenuDrawer",
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", name: "home" },
        { title: "Categories", icon: "mdi-account", name: "categories" },
        {
          title: "Vocabularies",
          icon: "mdi-account-group-outline",
          name: "vocabularies",
        },
        {
          title: "Questions",
          icon: "mdi-account-group-outline",
          name: "questions",
        },
        {
          title: "Practices",
          icon: "mdi-account-group-outline",
          name: "practices",
        },
        { title: "Users", icon: "mdi-account-group-outline", name: "users" },
      ],
      mini: true,
    };
  },
};
</script>

<style scoped>
</style>