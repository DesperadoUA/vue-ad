import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import * as fb from 'firebase'
import BuyModalComponent from './components/Shared/BuyModal'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
    el: "#app",
	vuetify,
    router,
	store,
    components: App,
	created(){
		var config = {
			apiKey: 'AIzaSyCblnzZKR4EFiBdXsYjfqOKz1SwzOsESDc',
			authDomain: 'https://vue-ads-project.firebaseio.com',
			databaseURL: 'https://vue-ads-project-dc2a7.firebaseio.com',
			projectId: 'vue-ads-project',
			storageBucket: 'vue-ads-project-dc2a7.appspot.com',
			messagingSenderId: ''
		}
		fb.initializeApp(config)
		fb.auth().onAuthStateChanged(user => {
			if(user) {
				this.$store.dispatch('autoLoginUser', user)
			}
		})

		this.$store.dispatch('fetchAds')
	},
    render: h => h(App)
}).$mount('#app')
