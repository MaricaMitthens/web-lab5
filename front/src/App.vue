<template>
  <div id="app">
    <NotesList v-bind:notes="notes" v-bind:addNote="addNote" v-bind:openNote="openNote"/>
    <NoteEditor v-bind:note="curNote" v-bind:delNote="delNote"/>
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
      // eslint-disable-next-line
      console.log("Length != 0");
      this.curNote = data[0];
    }

    // eslint-disable-next-line
    console.log(this.curNote);
  },
  methods: {
    addNote: async function() {
      const { data } = await axios.post("http://localhost:3001/notes", {
        name: "title",
        doc: ""
      });
      this.notes.push(data);
    },
    openNote: function(note) {
      // eslint-disable-next-line
      console.log(note);
      this.curNote = note;
    },
    delNote: async function(curNote) {
      // eslint-disable-next-line
      console.log("in del");
      const { status } = await axios.delete(
        "http://localhost:3001/notes/" + this.curNote._id
      );
      // eslint-disable-next-line
      console.log(status);
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
