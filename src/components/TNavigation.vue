<template>
  <v-navigation-drawer
      :clipped="true"
      :value="drawerVisible"
      :disable-resize-watcher="true"
      width="380"
      class="text-h7"
      app
      left
  >
    <v-list flat>
      <v-list-item-group active-class="active">
        <template v-slot:activator>
          <v-list-item-title style="color: black">Профили</v-list-item-title>
        </template>

        <v-list-item
            v-for="(option,index) in navigationOptions"
            :key="index"
            :to="{name : option.to}"
        >
          <v-icon
              class="mr-5"
              dark
          >{{ `mdi-${option.iconName}` }}
          </v-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ option.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'TNavigation',
  props: {
    drawerVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    navigationOptions: [
      {
        name: 'Все',
        iconName: 'check',
        to: 'all',
      },
      {
        name: 'Обработанные',
        iconName: 'check',
        to: 'processed',
      },
      {
        name: 'Не обработанные',
        iconName: 'exclamation',
        to: 'unprocessed',
      },
    ],
  }),
};

</script>

<style scoped>

.active {
  color: #0F4C82;
  font-weight: 500;
}

.v-list .v-list-item--active .v-icon {
  color: #fff;
}

i {
  background-color: #0F4C82;
  color: #fff;
  border-radius: 50%;
}
</style>