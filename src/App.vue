<template>
  <v-app>
    <layout-drawer/>
    <layout-app-bar/>
    <layout-content/>
    <layout-footer/>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row align="center">
                <v-avatar
                  size="40px"
                  class="mr-4"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More
          </v-btn>
          <div class="flex-grow-1"></div>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel
          </v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import LayoutDrawer from '@/components/layout/Drawer.vue';
import LayoutAppBar from '@/components/layout/AppBar.vue';
import LayoutContent from '@/components/layout/Content.vue';
import LayoutFooter from '@/components/layout/Footer.vue';

export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
  }),
  components: {
    LayoutDrawer,
    LayoutAppBar,
    LayoutContent,
    LayoutFooter,
  },
};
</script>
