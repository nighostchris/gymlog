<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs8 md6 lg6 xl6>
        <v-card :elevation="15" color="blue-grey lighten-5">
          <div class="font-weight-light headline title">Register</div>
          <v-layout justify-center pt-7>
            <v-flex xs8 md8 lg8 xl8>
              <v-text-field
                label="Username"
                v-model="username"
                :rules="[rules.required, rules.nameLengthLimit]"
                outlined
                clearable
              >
              </v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :rules="[rules.required, rules.passwordLength, rules.passwordNumber]"
                type="password"
                outlined
                clearable
              >
              </v-text-field>
              <v-text-field
                label="First Name"
                v-model="firstname"
                :rules="[rules.required, rules.nameLengthLimit]"
                outlined
                clearable
              >
              </v-text-field>
              <v-text-field
                label="Surname"
                v-model="surname"
                :rules="[rules.required, rules.nameLengthLimit]"
                outlined
                clearable
              >
              </v-text-field>
              <v-layout justify-end pb-7>
                <v-btn
                  color="indigo accent-4"
                  class="white--text font-weight-bold"
                  @click="onSubmit"
                >
                  Submit
                </v-btn>
              </v-layout>
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
      username: 'Username',
      password: 'Password',
      firstname: 'First Name',
      surname: 'Surname',
      rules: {
        required: value => !!value || 'Required.',
        nameLengthLimit: value => value.length <= 20 || 'Maximum 20 characters.',
        passwordLength: value => value.length >= 8 || 'Minimum 8 characters.',
        passwordNumber: value => value.match(/^(?=.*[0-9])/) || 'Contain at least 1 number.',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('clicked');
      console.log(`${this.username} ${this.firstname} ${this.surname}`);
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

.v-label {
  top: 12px !important;
}

.v-label--active {
  top: 18px !important;
}

.v-input__append-inner {
  margin-top: 8px !important;
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
