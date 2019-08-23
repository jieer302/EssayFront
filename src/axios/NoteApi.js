/**
 * Created by swhy-wl on 2018/8/3.
 */
import axios from 'axios'
import '../mock/note'

export const login = (content) => axios({
  method: 'post',
  url: '/Login',
  data: content
})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

export const getTab = () => axios({
  method: 'get',
  url: '/tabList/init',
})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

export const addTab = (content) => axios({
  method: 'post',
  url: '/tabList/add',
  data: content
})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

export const getNote = () => axios({
  method: 'get',
  url: '/noteList/init',
})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
