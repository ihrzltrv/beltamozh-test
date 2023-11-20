<template>
  <v-card>
    <v-card-title class="d-flex">
      <span>
        {{ tabName }}
      </span>
      <v-btn
          icon
          color="primary"
          @click="$emit('reload')"
      >
        <v-icon>
          mdi-reload
        </v-icon>
      </v-btn>
      <v-spacer/>
      <v-menu offset-y>
        <template #activator="{on ,attrs}">
          <v-btn
              v-bind="attrs"
              v-on="on"
              color="#0F4C82"
              dark
          >
            Действия
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <template
              v-for="(button,index) in actions"
          >
            <v-list-item
                :key="index"
                :disabled="button.disabled"
                @click="button.action"
            >
              <span>{{ button.actionName }}</span>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-data-table
        class="elevation-1"
        loading-text="Processing... Please wait"
        single-select
        :show-select="false"
        :headers="headers"
        :items="renderList"
        :items-per-page="10"
        :loading="loading"
        @click:row="choosePerson"
    >
      <template
          slot="item.status"
          slot-scope="{ item }"
      >
        <v-icon
            :style="{ 'color': item.status ? '#0F4C82' : '#DF2B2B' }"
        >
          {{ item.status ? 'mdi-cloud-check-variant' : 'mdi-cloud-remove' }}
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

const HEADERS = [
  {
    text: 'Статус',
    align: 'center',
    value: 'status',
  },
  { text: 'Имя', value: 'firstName' },
  { text: 'Фамилия', value: 'lastName' },
  { text: 'Компания', value: 'company' },
  { text: 'Специальность', value: 'jobTitle' },
  { text: 'Телефон', value: 'phone' },
  { text: 'E-mail', value: 'email' },
  { text: 'Интересы', value: 'interests' },
];

export default {
  name: 'TTable',
  components: {},
  props: {
    renderList: {
      type: Array,
      required: true,
    },
    actions: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
      required: true,
    },
    tabName: {
      type: String,
      required: true,
      default: 'Все',
    },
  },
  data() {
    return {
      headers: HEADERS,
    };
  },
  methods: {
    choosePerson(item, row) {
      this.$emit('select-list-item', item);

      if (row.isSelected) {
        row.select(false);
      } else {
        row.select(true);
      }
    },
  },
};

</script>

<style>

tr {
  cursor: pointer;
}
</style>