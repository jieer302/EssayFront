<template>
  <div>
    <header class="home_header"><img src="../assets/images/banner9.png"></header>
    <section class="home_section">
      <div v-for="item in tablist" class="home_tab" @click="tab_detail(item.name)">
        <h3>{{item.name}}</h3>
        <img :src="getImgUrl(item.id)">
      </div>
      <div class="home_tab" @click="dialogFormVisible = true">
        <div class="tab_add"></div>
      </div>
      <el-dialog title="笔记名称" :visible.sync="dialogFormVisible" center>
        <el-form>
          <el-form-item label="笔记名称">
            <el-input  placeholder="请输入笔记名称" class="tab_name" v-model="noteName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addNote">确 定</el-button>
        </div>
      </el-dialog>
    </section>
    <footer>copyright</footer>
  </div>
</template>

<script>
  import { getTab,addTab} from '../axios/noteApi';
  export default {
    data() {
      return {
        tablist: [],
        dialogFormVisible: false,
        noteName:''
      }
    },
    created () {

    },
    mounted(){
      getTab().then(res => {
        console.log(res.list);
        this.tablist = res.list;
      });
    },
    computed: {

    },
    methods: {
      getImgUrl(icon){
        return require("../assets/images/"+ (icon % 5) + ".png");
      },
      addNote(){
          if(!this.noteName){
            this.$message.error('请输入笔记名称');
            return;
          };
        addTab(this.noteName).then(res => {
          console.log(res);
          if(res.length != 0){
            this.$message.success('添加成功');
          }
          this.tablist = res;
      });
        this.dialogFormVisible = false;
      },
      tab_detail(tabName){
        this.$router.push({
          name: 'Note',
          params: {
            tabName: tabName
          }
        })
      }

      }
  }
</script>
<style>
body{
  padding: 0;
  margin:0;
  font-size:16px;
  font-family: "Microsoft Yahei",Arial,Helvetica,sans-serif;
  background-color: #ffffff;
}
.home_header{
  padding: 0;
}
  .home_header img{
     width: 100%;
  }
.home_section{
    display: flex;
    flex-wrap: wrap;
  }
  .home_tab{
    display:inline-block;
    border: 1px solid #dce0e3;
    width: 200px;
    height: 200px;
    margin: 2%;
    position: relative;
    cursor: pointer;
  }
.home_tab h3{
  position: absolute;
  left: 15px;
  z-index: 1;

}
  .home_tab img{
    width: 100%;
    opacity:0.6;
  }

  .tab_add{
    margin: 20px auto;
    width: 160px;
    height: 160px;
    line-height: 160px;
    background-color: white;
    border: 1px dashed black;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    cursor: pointer;
    position: relative;
  }

 .tab_add::before{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  margin-left: -40px;
  margin-top: -5px;
  border-top: 1px solid;
}

.tab_add::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  height: 80px;
  margin-left: -5px;
  margin-top: -40px;
  border-left: 1px solid;
}
.tab_name{
  width: 70%;
}
footer{
  line-height: 50px;;
  text-align: center;
  background-color: #eef2f5;
}
</style>
