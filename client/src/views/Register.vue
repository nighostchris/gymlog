<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs10 md6 lg6 xl6>
        <v-card :elevation="15" color="blue-grey lighten-5">
          <div class="font-weight-light headline title">Register</div>
          <v-layout justify-center pt-7>
            <v-flex xs8 md8 lg8 xl8>
              <v-form v-model="valid">
                <v-text-field
                  label="Username"
                  v-model="username"
                  :rules="[rules.required, rules.nameLengthLimit]"
                  solo-inverted
                  clearable
                >
                </v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="[rules.required, rules.passwordLength, rules.passwordNumber]"
                  type="password"
                  solo-inverted
                  clearable
                >
                </v-text-field>
                <v-text-field
                  label="First Name"
                  v-model="firstname"
                  :rules="[rules.required, rules.nameLengthLimit]"
                  solo-inverted
                  clearable
                >
                </v-text-field>
                <v-text-field
                  label="Surname"
                  v-model="surname"
                  :rules="[rules.required, rules.nameLengthLimit]"
                  solo-inverted
                  clearable
                >
                </v-text-field>
                <v-layout justify-end pb-7>
                  <v-btn
                    :disabled="!valid"
                    color="indigo accent-4"
                    class="white--text font-weight-bold"
                    @click="register"
                  >
                    Submit
                  </v-btn>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :timeout="1000"
    >
      {{ snackbarNoti }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      snackbar: false,
      snackbarNoti: '',
      username: '',
      password: '',
      firstname: '',
      surname: '',
      rules: {
        required: v => !!v || 'Required.',
        nameLengthLimit: v => (v && v.length <= 20) || 'Maximum 20 characters.',
        passwordLength: v => (v && v.length >= 8) || 'Minimum 8 characters.',
        passwordNumber: v => v.match(/^(?=.*[0-9])/) || 'Contain at least 1 number.',
      },
    };
  },
  methods: {
    register() {
      this.$axios.post('/api/v1/users', {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        surname: this.surname,
      }).then((res) => {
        if ('success' in res.data) {
          this.snackbarNoti = res.data.success;
          this.snackbar = true;
          setTimeout(() => this.$router.push('/'), 1000);
        } else {
          this.snackbarNoti = res.data.err;
          this.snackbar = true;
        }
      }).catch((e) => {
        this.snackbarNoti = e.response.data.err;
        this.snackbar = true;
      });
    },
  },
};
</script>

<style>
.title {
  padding: 15px 0px 15px 25px;
  color: white;
  background-color: #304FFE;
}

.input-section {
  padding-top: 20px;
}

.v-input__slot {
  min-height: 40px !important;
}

.v-sheet {
  border-radius: 20px;
}

.v-text-field--outlined fieldset {
  border-width: 2px;
}
</style>
