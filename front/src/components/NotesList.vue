<template>
  <div class="list">
    <button v-on:click="addNote()">New note</button>
    <ul>
      <li v-for="note in notes" v-bind:key="note._id">
        <p v-on:click="openNote(note)">{{note.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NotesList",
  props: {
    notes: Array,
    addNote: Function,
    openNote: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  float: left;
  width: 20vw;
  background-color: darksalmon;
  height: 95vh;
  padding: 20px;
  box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
li {
  text-align: left;
}
a {
  color: #42b983;
}
</style>
