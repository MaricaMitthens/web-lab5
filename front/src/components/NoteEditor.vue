

<template>
  <div class="editor">
    <header v-if="isNotePassed">
      <input id="title" :value="name" @input="updateName">
      <button id="put" v-on:click="updNote(name, doc)">SAVE</button>
      <button id="del" v-on:click="delNote()">DELETE</button>
    </header>
    <div v-if="isNotePassed" id="editor">
      <textarea :value="doc" @input="update"></textarea>
      <div class="markup" v-html="compiledMarkdown"></div>
    </div>
    <p v-else>Loading</p>
  </div>
</template>

<script>
import marked from "marked";
import _ from "lodash";

export default {
  name: "NoteEditor",
  props: ["note", "delNote", "updNote"],
  data: function() {
    if (this.curNote) {
      return {
        name: this.curNote.name,
        isNotePassed: true,
        doc: this.curNote.doc,
        id: this.curNote._id
      };
    } else {
      return {
        name: "",
        isNotePassed: false,
        doc: "",
        id: ""
      };
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.doc, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.doc = e.target.value;
    }, 300),
    updateName: function(e) {
      this.name = e.target.value;
    }
  },
  watch: {
    note: function(note) {
      this.isNotePassed = true;
      this.name = note.name;
      this.doc = note.doc;
      this.id = note._id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
  height: 95vh;
}
button {
  padding: 10px;
  margin: 10px;
}
input {
  padding: 10px;
  margin: 10px;
}
#editor {
  display: flex;
  height: 90vh;
  padding: 10px;
  box-sizing: border-box;
}
textarea {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}
.markup {
  flex: 1;
  background-color: lightgrey;
  padding: 10px;
  box-sizing: border-box;
}
</style>
