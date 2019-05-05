

<template>
  <div class="editor">
    <header>
      <input id="title" value="Title">
      <button id="put">SAVE</button>
      <button id="del">DELETE</button>
    </header>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div class="markup" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import _ from "lodash";

export default {
  name: "NoteEditor",
  data: function() {
    return {
      input: "# hello"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
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
