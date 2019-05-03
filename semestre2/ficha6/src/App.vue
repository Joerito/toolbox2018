<template>
  <v-app>

    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar fixed color="primary" dark>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" styles="cursor:pointer">
            VueShare
          </router-link>
        </v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list class="mt-5 pt-3">
        <v-list-tile v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>

    <v-toolbar fixed color="primary" dark>
      
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" styles="cursor:pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-content class="mt-4">
      <Home class="mt-5"/>
    </v-content>

  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      sideNav: false
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  },
  computed: {
    horizontalNavItems(){
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signun' }
      ]
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signun' }
      ]
    }
  }
}
</script>
