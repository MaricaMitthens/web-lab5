<template>
  <div id="app">
    <NotesList v-bind:notes="notes" v-bind:addNote="addNote" v-bind:openNote="openNote"/>
    <NoteEditor v-bind:note="curNote" v-bind:delNote="delNote" v-bind:updNote="updNote"/>
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
      notes: [],
      curNote: null
    };
  },
  created: async function() {
    const { data } = await axios.get("http://localhost:3001/notes");
    this.notes = data;
    if (data.length) {
      this.curNote = data[0];
    }
  },
  methods: {
    addNote: async function() {
      const { data } = await axios.post("http://localhost:3001/notes", {
        name: "title",
        doc: ""
      });
      this.notes.push(data);
      this.curNote = data;
    },
    openNote: function(note) {
      this.curNote = note;
    },
    delNote: async function() {
      const { data } = await axios.delete(
        "http://localhost:3001/notes/" + this.curNote._id
      );
      this.notes = data;
      this.curNote = data[0];
    },
    updNote: async function(name, doc) {
      const { data } = await axios.put(
        "http://localhost:3001/notes/" + this.curNote._id,
        { name, doc }
      );
      this.notes = data;
    }
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
