<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list
      nav
    >
      <template
        v-for="(item, i) in items"
      >
        <v-list-item
          :key="i"
          :to="item.to"
          active-class="primary white--text"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'contacts',
        text: 'Home',
        to: '/',
      },
      {
        icon: 'history',
        text: 'about',
        to: '/about',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
