<template>
  <v-app>
    <v-navigation-drawer app temporary
    v-model="drawer">
      <v-list>
        <v-list-item v-for="link of links"
          :key="link.title" :to="link.url"
        >
          <v-list-item-icon>
            <v-icon color="pink">
              {{link.icon}}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon color="pink">
              mdi-account-convert
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
                    @click="onLogout"
                    >LOGOUT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
              @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn text
               v-for="link in links"
               :key="link.title" :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
        </v-btn>
        <v-btn text
               @click="onLogout"
               v-if="isUserLoggedIn"
        >
          <v-icon left>mdi-account-convert</v-icon>
          LOGOUT
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <template v-if="error">
      <v-snackbar
           :timeout="15000"
           :multi-line="true"
           color="error"
           @input="closeError"
           :value="true"
    >
      <div class="snackbar_wrapper">
      {{error}}
        <v-btn color="dark" @click="closeError">
          Close
        </v-btn>
      </div>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      drawer: false,
      snackbar: true,
      text: 'Text snackbar'
  }),
    methods: {closeError(){this.$store.dispatch('clearError')},
		onLogout(){
			this.$store.dispatch('logoutUser')
            this.$router.push('/')
		}
	},
    computed: {error(){ return this.$store.getters.error},
        isUserLoggedIn(){return this.$store.getters.isUserLoggedIn},
        links(){if(this.isUserLoggedIn){
            return [
				{title: 'Orders', icon: 'mdi-basket', url: '/order'},
				{title: 'New ad', icon: 'mdi-account-multiple-plus', url: '/new'},
				{title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
            ]
          }
          else {
            return [
				{title: 'Login', icon: 'mdi-login-variant', url: '/login'},
				{title: 'Registration', icon: 'mdi-account-star', url: '/registration'}
            ]
          }
        }
    },
};
</script>
<style>
  .pointer {
    cursor:pointer;
  }
  .snackbar_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .color_white {
    color: white!important;
  }
</style>