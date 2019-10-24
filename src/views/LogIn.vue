<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>로그인 폼</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert type="error" v-show="alertError" dense>
                가입된 계정 정보가 없거나 비밀번호가 다릅니다.
              </v-alert>
              <v-text-field
                label="이메일"
                name="login"
                prepend-icon="email"
                type="text"
                v-model="email"
                clearable
                dark
              ></v-text-field>

              <v-text-field
                label="비밀번호"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="password"
                clearable
                dark
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" @click="logIn">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LogIn',
  data: () => ({
    email: '',
    password: '',
    alertError: false,
  }),
  methods: {
    async logIn() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch('user/LogIn', payload);
      } catch ({ data }) {
        if (data.message.detail === 'No active account found with the given credentials') {
          this.alertError = true;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
