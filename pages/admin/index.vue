<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="10"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
interface ITable {
  name: string,
  date: Date,
  message: string,
  status: 'new' | 'pending' | 'resolved' | 'cancelled'
}

export default {
  name: "index",

  async asyncData() {
    const placeholderData = [
      {
        name: 'Anakin Skywalker',
        date: new Date,
        message: 'You underestimate my power',
        status: 'new'
      },
      {
        name: 'Obi-Wan Kenobi',
        date: new Date,
        message: 'I have the highground',
        status: 'pending'
      },
      {
        name: 'Darth Sideous',
        date: new Date,
        message: 'I am the Senate',
        status: 'resolved'
      },
      {
        name: 'Luke Skywalker',
        date: new Date,
        message: 'I am a great Jedi',
        status: 'cancelled'
      },
    ] as ITable[];

    return {
      data: placeholderData
    }
  },

  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Time', value: 'date' },
        { text: 'Message', value: 'message' },
        { text: 'Status', value: 'status' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
