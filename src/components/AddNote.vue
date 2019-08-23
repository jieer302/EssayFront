<template>
    <div>
      <header class="note_header"></header>
      <section class="notea_content">
        <div>
          <el-input placeholder="笔记名称" v-model="noteTitle"></el-input>
        </div>
        <quill-editor class="editor"
                      ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      @change="onEditorChange($event)">
        </quill-editor>
        <el-button @click="noteCancel">Cancel</el-button>
        <el-button class="note_submit" type="primary"  @click="noteSubmit">Submit</el-button>
      </section>
      <footer>copyright</footer>
    </div>
</template>

<script>
    import { addQuillTitle } from '../assets/quill-title.js';
    export default {
        data() {
            return {
              noteTitle:null,
              content: null,
              editorOption: {
                modules: {
                  toolbar: [
                    ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
                    ["blockquote", "code-block"], // 引用  代码块
                    //[{ header: 1 }, { header: 2 }], // 1、2 级标题
                    [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
                    [{ script: "sub" }, { script: "super" }], // 上标/下标
                    [{ indent: "-1" }, { indent: "+1" }], // 缩进
                    // [{'direction': 'rtl'}],                         // 文本方向
                    [{ size: ["small", false, "large", "huge"] }], // 字体大小
                    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
                    [{ font: [] }], // 字体种类
                    [{ align: [] }], // 对齐方式
                    ["clean"], // 清除文本格式
                    ["link", "image", "video"] // 链接、图片、视频
                  ], //工具菜单栏配置
                  imageDrop: true, // 拖动加载图片组件。
                  imageResize: { //调整大小组件。
                    displayStyles: {
                      backgroundColor: 'black',
                      border: 'none',
                      color: 'white'
                    },
                    modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                  },
                },
                placeholder: '请在这里添加笔记内容', //提示
                readyOnly: false, //是否只读
                theme: 'snow', //主题 snow/bubble
                syntax: true, //语法检测

              }
            }
        },
        created () {

        },
      mounted(){
        addQuillTitle();
      },
        computed: {
          editor() {
            return this.$refs.myTextEditor.quillEditor;
          }
        },
        methods: {
          // 失去焦点
          onEditorBlur(editor) {},
          // 获得焦点
          onEditorFocus(editor) {},
          // 开始
          onEditorReady(editor) {},
          // 值发生变化
          onEditorChange(editor) {
            this.content = editor.html;
            console.log(editor);
          },
          noteSubmit(){
            console.log(this.content);
            this.$router.push({
              name: 'NoteDetail',
              params: {
                noteContent: this.content,
                noteTitle:this.noteTitle,
              }
            })
          },
          noteCancel(){
            this.$router.push('/Note');
          }
        }
    }
</script>
<style>

  .notea_content{
    width: 80%;
    margin: 20px auto;
  }

  .ql-editor{
     min-height:400px;
   }
  .ql-snow.ql-toolbar{
    text-align: left;
  }
  .note_submit{
   margin-top: 20px;
  }


</style>
