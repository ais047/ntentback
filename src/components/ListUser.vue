<template>
  <b-row>
    <b-col cols="12">
      <h2>
        User List
        <b-link href="#/create-user">(Add User)</b-link>
      </h2>
      <b-table striped hover :items="users" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListUser',
  data () {
    return {
      fields: {
        first_name: { label: 'First Name', sortable: true, 'class': 'text-center' },
        last_name: { label: 'Last Name', sortable: true, 'class': 'text-center' },
        email: { label: 'email', 'class': 'text-center' }
      },
      users: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/user`)
    .then(response => {
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (user) {
      this.$router.push({
        name: 'DashboardUser',
        params: { id: user._id }
      })
    }
  }
}
</script>