<template>
  <v-navigation-drawer
      :value="visible"
      :clipped="true"
      :disable-resize-watcher="true"
      width="434"
      class="text-h7 pa-8"
      app
      right
  >
    <v-form
        class="form"
    >
      <v-container>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Имя</span>
          <v-text-field
              v-model="searchData.firstName"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Фамилия</span>
          <v-text-field
              v-model="searchData.lastName"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Компания</span>
          <v-text-field
              v-model="searchData.company"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Специальность</span>
          <v-text-field
              v-model="searchData.jobTitle"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Телефон</span>
          <v-text-field
              v-model="searchData.phone"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>E-mail</span>
          <v-text-field
              v-model="searchData.email"
              dense
              outlined
              hide-details="auto"
              type="tel"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Интересы</span>
          <v-text-field
              v-model="searchData.interests"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row justify="end">
          <v-btn
              color="black"
              dark
              outlined
              :disabled="loading"
              @click="handleOnCleanForm"
          >
            Очистить
          </v-btn>
          <v-btn
              class="ml-5"
              color="#0F4C82"
              dark
              :loading="loading"
              @click="$emit('submit', searchData)"
          >
            Применить
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'SearchForm',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchData: {},
    };
  },
  methods: {
    handleOnCleanForm() {
      this.searchData = {};
      this.$emit('clean-form');
    },
  },
};

</script>

