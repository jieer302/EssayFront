/**
 * Created by swhy-wl on 2018/8/2.
 */
import Mock from 'mockjs'

var list_tab = [
  {id : 0,name : 'JavaScript'},
  {id : 1,name : 'Vue'},
  {id : 2,name : 'React'},
  {id : 3,name : 'JAVA'},
  {id : 4,name : 'Python'},
]

var list_note = [
  {id : 0,name : 'JavaScript工作机制'},
  {id : 1,name : '前端模块化'},
  {id : 2,name : 'React项目的搭建'},
  {id : 3,name : 'Vue与React的区别'},
  {id : 4,name : 'Python量化'},
  {id : 5,name : 'vue富文本编辑'},
  {id : 6,name : 'vue页面跳转时上一页面的样式'},
  {id : 7,name : 'axios的应用'},
  {id : 8,name : 'mock的应用'},
  {id : 9,name : 'CSS3常用样式'},
]


Mock.mock('/tabList/init',{
    list: list_tab
});

Mock.mock('/tabList/add','post',function(option){
  list_tab.push({id :list_tab.length,name : option.body});
  return list_tab;
});

Mock.mock('/noteList/init',{
  list: list_note
});







