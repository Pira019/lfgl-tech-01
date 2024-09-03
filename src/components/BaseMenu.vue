<template>
  <nav>
    <v-app-bar flat>
      <v-container class="pa-0 fill-height">
        <v-toolbar-title>
          <router-link to="/" tag="span">
            <v-img class="mx-2" :src="imgLogo" max-height="100" max-width="70" contain alt="logo lfgl-tech"></v-img>
          </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn v-for="(item,index) in menuItems" :key="index">{{ $t(item.key) }}</v-btn>
          </template>
        </v-toolbar-items>
        <v-spacer />
        <div>
          <v-btn rounded="xl" variant="flat" color="primary">{{ $t('cta.get_quote') }}</v-btn>
          <base-menu-lang></base-menu-lang>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
            v-if="!$vuetify.display.mdAndUp"></v-app-bar-nav-icon>
        </div>
      </v-container>
    </v-app-bar>
    <!--Start menu xs-->
    <v-navigation-drawer v-if="!$vuetify.display.mdAndUp" v-model="drawer"
      :location="$vuetify.display.mobile ? 'top' : undefined" temporary>
      <v-list nav>
        <v-list-item link to="/" v-for="(item,index) in menuItems" :key="index">
          <v-list-item-title>{{ $t(item.key) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--End menu xs-->
  </nav>
</template>

<script>
import imgLogo from '../assets/logoLfgl.png'
export default {
  data() {
    return {
      imgLogo,
      drawer: false,
      menuItems: [
        { key: 'menu.services', route: '/services' },
        { key: 'menu.about', route: '/about' },
        { key: 'menu.faq', route: '/faq' },
        { key: 'menu.contact', route: '/contact' }
      ]
    }
  },

}

</script>
