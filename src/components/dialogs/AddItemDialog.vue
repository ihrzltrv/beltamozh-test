<template>
  <v-dialog
      :value="visible"
      persistent
      max-width="800px"
  >
    <v-card class="pa-5">
      <v-card-title>Добавление нового элемента</v-card-title>
      <v-container>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Имя</span>
          <v-text-field
              v-model="personData.firstName"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Фамилия</span>
          <v-text-field
              v-model="personData.lastName"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Компания</span>
          <v-text-field
              v-model="personData.company"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Специальность</span>
          <v-text-field
              v-model="personData.jobTitle"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Телефон</span>
          <v-text-field
              v-model="personData.phone"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>E-mail</span>
          <v-text-field
              v-model="personData.email"
              dense
              outlined
              hide-details="auto"
              type="tel"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Интересы</span>
          <v-text-field
              v-model="personData.interests"
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
              @click="handleCancel"
          >
            Отменить
          </v-btn>
          <v-btn
              class="ml-5"
              color="#0F4C82"
              dark
              :loading="loading"
              @click="handleSubmit"
          >
            Применить
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>


const EMPTY_PERSON_DATA = {
  status: '',
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  phone: '',
  email: '',
  interests: '',
};

export default {
  name: 'AddItemDialog',
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
  data: () => ({
    personData: {},
  }),
  methods: {
    handleSubmit() {
      this.$emit('submit', this.personData);
      this.personData = { ...EMPTY_PERSON_DATA };
    },
    handleCancel() {
      this.$emit('cancel');
      this.personData = { ...EMPTY_PERSON_DATA };
    },
  },
};
</script>
