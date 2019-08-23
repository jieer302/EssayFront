<template>
    <div>
      <header class="note_header"></header>
      <section class="note_container">
        <div class="note_top">
          <h1>{{tabName}}</h1>
          <el-button class="note_add" @click="addNote" type="primary">Add</el-button>
          <el-button class="note_back" @click="nodeListBack">Back</el-button>
        </div>
        <div class="note_list">
           <p v-for="item in noteList">{{item.name}}</p>
        </div>
        <el-pagination class="pagination"
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </section>
      <footer>copyright</footer>

    </div>
</template>

<script>
  import { getNote} from '../axios/noteApi';

    export default {
        data() {
          return {
            tabName: this.$route.params.tabName,
            noteList:[],
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
        computed: {},
        methods: {
          addNote(){
            this.$router.push('/AddNote');
          },
          nodeListBack(){
            this.$router.push('/Home');
          }
        }
    }
</script>
<style>

  .note_container{
    width: 80%;
    margin: 0 auto;
  }
  .note_top{
    text-align: left;
    border-bottom: 1px solid #dce0e3;
    position: relative;
    min-height:50px;
  }

  .note_add{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .note_back{
    position: absolute;
    right: 100px;
    bottom: 10px;
  }
  .note_list{
    text-align: left;
    cursor: pointer;
  }
  .note_list p{
    border-bottom: 1px dashed #dce0e3;
  }

</style>
