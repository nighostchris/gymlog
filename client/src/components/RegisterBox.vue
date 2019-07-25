<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs8 md6 lg6 xl6>
        <v-card>
          <div>{{ title }}</div>
          <v-layout justify-center>
            <v-flex xs8 md8 lg8 xl8>
              <v-text-field
                label="Username"
                v-model="username"
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                outlined
              >
              </v-text-field>
              <v-text-field
                label="First Name"
                v-model="firstname"
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Surname"
                placeholder="Surname"
                outlined
              >
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Register',
      username: 'Username',
      password: 'Password',
      firstname: 'First Name',
      surname: 'Surname',
    };
  },
};
</script>

<style>
.v-label {
  top: 12px !important;
}

.v-label--active {
  top: 18px !important;
}

.v-input__slot {
  min-height: 40px !important;
}
</style>
