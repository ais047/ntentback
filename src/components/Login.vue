<template>
  <b-container>
      <h2>
        Login
      </h2>
      <br>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Enter Email">
          <b-form-input id="email" :state="state" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Enter Password">
          <b-form-input id="password" :state="state" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button><br>
        <a href="#/create-user">Register</a>
      </b-form>
    </b-container>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowUser',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/user`, this.user)
      .then(response => {
        this.$router.push({
          name: 'ShowUser',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>