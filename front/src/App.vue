<template>
  <div id="app">
    <NotesList msg="Welcome to notes list"/>
    <NoteEditor msg="Welcome to editor"/>
  </div>
</template>

<script>
import NotesList from "./components/NotesList.vue";
import NoteEditor from "./components/NoteEditor.vue";

export default {
  name: "app",
  components: {
    NotesList,
    NoteEditor
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
