import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		name: 'Main',
		component: () => import('@/pages/Main.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
