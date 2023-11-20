<template>
  <v-dialog
      :value="visible"
      persistent
      max-width="800px"
  >
    <v-card class="pa-5">
      <v-card-title>Изменение текущего элемента</v-card-title>
      <v-container>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Имя</span>
          <v-text-field
              v-model="localSelectedItem.firstName"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Фамилия</span>
          <v-text-field
              v-model="localSelectedItem.lastName"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Компания</span>
          <v-text-field
              v-model="localSelectedItem.company"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Специальность</span>
          <v-text-field
              v-model="localSelectedItem.jobTitle"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Телефон</span>
          <v-text-field
              v-model="localSelectedItem.phone"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>E-mail</span>
          <v-text-field
              v-model="localSelectedItem.email"
              @input="emitUpdateItem"
              dense
              outlined
              hide-details="auto"
              type="tel"
          />
        </v-row>
        <v-row class="d-flex flex-md-column mb-5">
          <span>Интересы</span>
          <v-text-field
              v-model="localSelectedItem.interests"
              @input="emitUpdateItem"
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
              @click="$emit('cancel')"
          >
            Отменить
          </v-btn>
          <v-btn
              class="ml-5"
              color="#0F4C82"
              dark
              :loading="loading"
              @click="$emit('submit')"
          >
            Применить
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: 'ChangeItemDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    selectedItem: {
      type: Object,
      default: () => {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localSelectedItem: { ...this.selectedItem },
    };
  },
  watch: {
    selectedItem() {
      this.localSelectedItem = { ...this.selectedItem };
    },
  },
  methods: {
    emitUpdateItem() {
      this.$emit('update-data', this.localSelectedItem);
    },
  },
};
</script>
