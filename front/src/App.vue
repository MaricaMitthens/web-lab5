<template>
  <div id="app">
    <NotesList v-bind:notes="notes"/>
    <NoteEditor msg="Welcome to editor"/>
  </div>
</template>

<script>
import NotesList from "./components/NotesList.vue";
import NoteEditor from "./components/NoteEditor.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    NotesList,
    NoteEditor
  },
  data: function() {
    return {
      notes: []
    };
  },
  created: async function() {
    const { data } = await axios.get("http://localhost:3001/notes");
    this.notes = data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
