<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
</template>

<script>
  import Vue from 'vue'
import { quillEditor } from 'vue-quill-editor'
  
  export default {
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          // some quill options
        }
      }
    },
    components:{
      quillEditor
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
    // get the current quill instace object.
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      // you can use current editor object to do something(quill methods)
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>