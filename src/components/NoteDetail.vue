<template>
    <div>
      <header class="note_header"></header>
      <article class="note_article">
        <aside class="note_aside">
          <h1>JavaScript</h1>
          <a v-for="item in noteList">{{item.name}}</a>
        </aside>
        <section class="noted_content">
          <el-button class="noted_savePic" type="primary"  @click="clickGeneratePicture">Save Pictures</el-button>
          <div ref="imageDom">
            <div class="note_title">
              <h1>{{noteTitle}}</h1>
            </div>
            <quill-editor class="contentShow"
                          ref="myTextEditor"
                          v-model="noteContent"
                          :options="editorOption"
                          @blur="onEditorBlur($event)"
                          @focus="onEditorFocus($event)"
                          @ready="onEditorReady($event)"
                          @change="onEditorChange($event)">
            </quill-editor>
          </div>
         <!-- <el-button class="noted_back" type="primary"  @click="noteBack">Back</el-button>-->
        </section>
      </article>
      <footer>copyright</footer>
    </div>
</template>

<script>
  import html2canvas from "html2canvas";
  import { getNote} from '../axios/noteApi';
    export default {
        data() {
            return {
              noteList:[],
              dataURL : '',
              noteTitle:this.$route.params.noteTitle,
              noteContent:this.$route.params.noteContent,
              editorOption: {
                modules: {
                  toolbar: [],
                },
                readyOnly: true, //是否只读
                theme: 'snow', //主题 snow/bubble
              }
            }
        },
        created () {

        },
      mounted(){
        getNote().then(res => {
          console.log(res.list);
          this.noteList = res.list;
        });
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
          onEditorFocus(editor) {
            editor.enable(false);
          },
          // 开始
          onEditorReady(editor) {},
          // 值发生变化
          onEditorChange(editor) {
          },
          noteBack(){
            this.$router.push('/Note');
          },
          /**
           * 将页面指定节点内容转为图片
           * 1.拿到想要转换为图片的内容节点DOM；
           * 2.转换，拿到转换后的canvas
           * 3.转换为图片
           */
          clickGeneratePicture() {
            window.pageYOffset = 0;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            html2canvas(this.$refs.imageDom,{backgroundColor: null}).then((canvas) => {
              // 转成图片，生成图片地址
              this.dataURL = canvas.toDataURL("image/png");
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function() {
              var canvas = document.createElement("canvas");
              canvas.width = image.width;
              canvas.height = image.height;
              var context = canvas.getContext("2d");
              context.drawImage(image, 0, 0, image.width, image.height);
              var url = canvas.toDataURL(); //得到图片的base64编码数据
              console.log(url)

              var a = document.createElement("a"); // 生成一个a元素
              var event = new MouseEvent("click"); // 创建一个单击事件
              a.download = 'pic' || "photo"; // 设置图片名称
              a.href = url; // 将生成的URL设置为a.href属性
              a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = this.dataURL;
            })
          }
        }
    }
</script>
<style>
  .note_title{
    text-align: left;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  .note_article{
    width: 90%;
    margin: 2% auto;
    display: flex;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    box-sizing: border-box;

  }
  .note_aside{
    width: 25%;
    text-align: left;
    padding-left: 2%;
    padding-bottom: 20px;
    background-color: #eef2f5;
  }
  .note_aside a{
    display: block;
    margin-top: 10px;
  }
  .noted_content{
    width: 70%;
    margin-left: 3%;
    position: relative;

  }
  .noted_savePic{
    position: absolute;
    right: 3%;
    top:10px;
  }
  .contentShow .ql-snow{
    border: 0;
  }
 .contentShow .ql-snow.ql-toolbar{
    height: 0;
    padding: 0;
    border: 0;
  }
  .noted_back{
    margin-top: 20px;
  }
  .imageShow{
    padding: 0;
  }
  .imageShow img{
    width: 100%;
    padding: 0;
  }

</style>
