<template>
  <div class="list">
    <button>New note</button>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "NotesList",
  props: {
    msg: String
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
