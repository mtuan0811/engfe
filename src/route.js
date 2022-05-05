import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/home/HomePage.vue'
import ListUserPage from './pages/users/ListUserPage.vue'
import ListCategoryPage from './pages/categories/ListCategoryPage.vue'
import ListVocabularyPage from './pages/vocabularies/ListVocabularyPage.vue'
import ListQuestionPage from './pages/questions/ListQuestionPage.vue'
import ListPracticePage from './pages/practices/ListPracticePage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/users', component: ListUserPage, name: 'users' },
        { path: '/categories', component: ListCategoryPage, name: 'categories' },
        { path: '/vocabularies', component: ListVocabularyPage, name: 'vocabularies' },
        { path: '/questions', component: ListQuestionPage, name: 'questions' },
        { path: '/practices', component: ListPracticePage, name: 'practices' },
    ]
})

export default router;