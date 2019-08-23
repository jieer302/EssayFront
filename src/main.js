// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'  //引入编辑器
import imageResize from 'quill-image-resize-module' // 调整大小组件。
import { ImageDrop } from 'quill-image-drop-module'; // 拖动加载图片组件。
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', imageResize);
import './assets/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
