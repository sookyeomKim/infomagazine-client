<template>
  <div>
    <template v-if="layoutType === 'dashboard'">
      <layout-type-dashboard/>
    </template>
    <template v-else-if="layoutType === 'plain'">
      <layout-type-plain/>
    </template>
  </div>
</template>

<script>
import LayoutTypeDashboard from '@/components/layout/type/Dashboard.vue';
import LayoutTypePlain from '@/components/layout/type/Plain.vue';

export default {
  name: 'App',
  computed: {
    layoutType() {
      return this.$store.getters['app/layoutType'];
    },
  },
  components: {
    LayoutTypeDashboard,
    LayoutTypePlain,
  },
};
</script>
