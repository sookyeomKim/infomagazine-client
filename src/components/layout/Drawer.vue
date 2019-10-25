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
import {
  mapMutations,
} from 'vuex';

export default {
  name: 'Drawer',
  data: () => ({
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
  computed: {
    drawer: {
      get() {
        return this.$store.getters['app/drawerState'];
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },
  methods: {
    ...mapMutations('app', ['setDrawer']),
  },
};
</script>

<style scoped>

</style>
