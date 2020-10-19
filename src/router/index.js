import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import Orders from '@/components/User/Orders.vue'
import Ad from '@/components/Ads/Ad.vue'
import AdList from '@/components/Ads/AdList.vue'
import NewAd from '@/components/Ads/NewAd.vue'
import AuthGuard from '../router/auth_guard'

Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/registration',
			name: 'register',
			component: Register
		},
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/order',
			name: 'Order',
			component: Orders,
			beforeEnter: AuthGuard
		},
		{
			path: '/ad/:id',
			props: true,
			name: 'Ad',
			component: Ad
		},
		{
			path: '/list',
			name: 'AdList',
			component: AdList,
			beforeEnter: AuthGuard
		},
		{
			path: '/new',
			name: 'NewAd',
			component: NewAd,
			beforeEnter: AuthGuard
		}

	],
	mode: 'history'
})