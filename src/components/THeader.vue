<template>
  <v-app-bar
      app
      dark
      fixed
      flat
      clipped-left
      clipped-right
      color="#0F4C82"
      height="60"
  >
    <v-app-bar-nav-icon @click="$emit('burger-click')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>

    <v-btn
        icon
        @click.stop="$emit('search-click')"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'THeader',
};

</script>

