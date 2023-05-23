import About from './pages/About.vue';
import Demo from './pages/Demo.vue';
import Blog from './pages/Blog.vue';

const routes = [
    {path: '/', component: About},
    {path: '/blog', component: Blog},
    {path: '/demo', component: Demo},
];

export default routes;
