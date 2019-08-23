import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Note from '@/components/Note'
import AddNote from '@/components/AddNote'
import NoteDetail from '@/components/NoteDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    },
    {
      path: '/AddNote',
      name: 'AddNote',
      component: AddNote
    },
    {
      path: '/NoteDetail',
      name: 'NoteDetail',
      component: NoteDetail
    }
  ]
})
