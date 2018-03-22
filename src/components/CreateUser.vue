<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add User
        <b-link href="/users">(User List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter First Name">
          <b-form-input id="first_name" :state="state" v-model.trim="user.first_name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Last Name">
          <b-form-input id="last_name" :state="state" v-model.trim="user.last_name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Email">
          <b-form-input id="email" :state="state" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Password">
          <b-form-input id="password" :state="state" v-model.trim="user.password"></b-form-input>  
        </b-form-group>
          <br>
         <label for="agree">
          <input id="agree" type="checkbox" value="agree" v-model="checked"/>
          The terms of service is listed at <a href src="/"> NEED TOS PAGE </a>
          <br>
          Do you accept the terms of Service?
        </label><br>
        <b-button :disabled="!checked" type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateUser',
  data () {
    return {
      user: {},
      checked: false
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