<template>
  <v-app>
    <layout-drawer/>
    <layout-app-bar/>
    <layout-content/>
    <layout-footer/>
  </v-app>
</template>

<script>
import LayoutDrawer from '@/components/layout/Drawer.vue';
import LayoutAppBar from '@/components/layout/AppBar.vue';
import LayoutContent from '@/components/layout/Content.vue';
import LayoutFooter from '@/components/layout/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    LayoutDrawer,
    LayoutAppBar,
    LayoutContent,
    LayoutFooter,
  },
};
</script>

<style scoped>

</style>
