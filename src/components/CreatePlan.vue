<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Plan
        <b-link href="/plan">(Plan List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Plan Title">
          <b-form-input id="title" :state="state" v-model.trim="plan.title"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Date (Month - Date - Year)">
          <b-form-input id="date" :state="state" v-model.trim="plan.date"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Time">
          <b-form-input id="time" :state="state" v-model.trim="plan.time"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Provider">
          <b-form-input id="provider" :state="state" v-model.trim="plan.provider"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreatePlan',
  data () {
    return {
      plan: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/plan`, this.plan)
      .then(response => {
        this.$router.push({
          name: 'ShowPlan',
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