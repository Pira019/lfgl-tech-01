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
            <v-btn>test</v-btn>
            <v-btn>test</v-btn>
            <v-btn>test</v-btn>
            <v-btn>test</v-btn>
            <v-btn>{{ $t('test')}}</v-btn>
          </template>
        </v-toolbar-items>  
        <v-spacer/>
        <div>
          <v-btn rounded="xl" variant="flat" color="primary">test</v-btn>
          <base-menu-lang></base-menu-lang>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-if="!$vuetify.display.mdAndUp"></v-app-bar-nav-icon>
        </div>
      </v-container>
    </v-app-bar>
    <!--Start menu xs-->
    <v-navigation-drawer v-if="!$vuetify.display.mdAndUp" v-model="drawer"
      :location="$vuetify.display.mobile ? 'top' : undefined" temporary>
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>1</v-list-item-title>
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
      drawer: false
    }
  },

}

</script>