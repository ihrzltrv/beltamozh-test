<template>
  <v-dialog
      :value="visible"
      max-width="550"
  >
    <v-card>
      <v-card-title class="text-h5">
        Вы уверены что хотите удалить элемент?
      </v-card-title>

      <v-card-text>
        Удаленный элемент невозможно будет восстановить
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            text
            :disabled="loading"
            @click="$emit('cancel')"
        >
          Нет
        </v-btn>

        <v-btn
            color="red darken-1"
            text
            :loading="loading"
            @click="$emit('submit')"
        >
          Да
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: 'RemoveItemDialog',
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
};
</script>
