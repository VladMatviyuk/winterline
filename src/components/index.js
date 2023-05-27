import Header from "./Header.vue";
import Main from '../pages/About/Main.vue';
import Social from '../pages/About/Social.vue';
import Stack from '../pages/About/Stack.vue';
import LastBlog from '../pages/About/LastBlog.vue';
import BlogCard from "./BlogCard.vue";
import UButton from './UI/UButton.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'Main', component: Main},
    {name: 'Social', component: Social},
    {name: 'Stack', component: Stack},
    {name: 'LastBlog', component: LastBlog},
    {name: 'BlogCard', component: BlogCard},
    {name: 'UButton', component: UButton},
]
export default  {
    install(app){
        components
            .forEach(({name, component}) =>
                app.component(name, component));
    }
}