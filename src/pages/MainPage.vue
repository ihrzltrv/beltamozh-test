<template>
  <v-app class="main">
    <THeader
        @burger-click="isNavVisible = !isNavVisible"
        @search-click="isSearchFormVisible = !isSearchFormVisible"
    />
    <TNavigation
        :drawer-visible="isNavVisible"
    />
    <v-main>
      <TTable
          class="main__table"
          :render-list="filteredList"
          :actions="listActions"
          :loading="isLoading"
          :tab-name="tabName"
          @select-list-item="handleOnListItemSelect"
          @reload="handleOnTableReload"
      />
    </v-main>

    <SearchForm
        :visible="isSearchFormVisible"
        :loading="isLoading"
        @clean-form="handleOnCleanSearchForm"
        @submit="handleOnSubmitSearchForm"
    />
    <RemoveItemDialog
        :visible="isRemoveDialogShown"
        :loading="isLoading"
        @cancel="handleOnRemoveDialogCancel"
        @submit="handleOnRemoveDialogSubmit"
    />
    <AddItemDialog
        :visible="isAddDialogShown"
        :loading="isLoading"
        @cancel="handleOnAddDialogCancel"
        @submit="handleOnAddDialogSubmit"
    />
    <ChangeItemDialog
        :visible="isChangeDialogShown"
        :loading="isLoading"
        :selected-item="selectedListItem"
        @update-data="handleItemUpdate"
        @cancel="handleOnChangeDialogCancel"
        @submit="handleOnChangeDialogSubmit"
    />
  </v-app>
</template>

<script>

import THeader from '@/components/THeader.vue';
import TTable from '@/components/TTable.vue';
import TNavigation from '@/components/TNavigation.vue';
import SearchForm from '@/components/SearchForm.vue';
import RemoveItemDialog from '@/components/dialogs/RemoveItemDialog.vue';
import AddItemDialog from '@/components/dialogs/AddItemDialog.vue';
import ChangeItemDialog from '@/components/dialogs/ChangeItemDialog.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: { ChangeItemDialog, AddItemDialog, RemoveItemDialog, SearchForm, TNavigation, TTable, THeader },
  props: {
    status: {
      type: String,
      required: true,
      default: 'all',
    },
    tabName: {
      type: String,
      required: true,
      default: 'all',
    },
  },
  data: () => ({
    isNavVisible: false,
    isSearchFormVisible: false,
    selectedListItem: null,
    isRemoveDialogShown: false,
    isAddDialogShown: false,
    isChangeDialogShown: false,
  }),
  computed: {
    ...mapGetters({
      peopleList: 'peopleList',
      isLoading: 'isLoading',
    }),
    filteredList() {
      switch (this.status) {
        case 'all':
          return this.peopleList;
        case 'processed':
          return this.peopleList.filter(person => person.status);
        case 'unprocessed':
          return this.peopleList.filter(person => !person.status);
        default:
          return this.peopleList;
      }
    },
    listActions() {
      return [
        {
          actionName: 'Добавить',
          value: 'add',
          action: () => {
            this.isAddDialogShown = true;
          },
        },
        {
          actionName: 'Изменить',
          value: 'change',
          disabled: !this.selectedListItem,
          action: () => {
            this.isChangeDialogShown = true;
          },
        },
        {
          actionName: 'Удалить',
          value: 'delete',
          disabled: !this.selectedListItem,
          action: () => {
            this.isRemoveDialogShown = true;
          },
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      getAllPeopleList: 'getAllPeopleList',
      getFilteredPeople: 'getFilteredPeople',
      createNewPerson: 'createNewPerson',
      updatePerson: 'updatePerson',
      deletePersonProfile: 'deletePersonProfile',
    }),
    handleItemUpdate(updatedData) {
      this.selectedListItem = { ...this.selectedListItem, ...updatedData };
    },
    async handleOnCleanSearchForm() {
      await this.getAllPeopleList();
    },
    async handleOnSubmitSearchForm(searchData) {
      await this.getFilteredPeople(searchData);
    },
    handleOnListItemSelect(item) {
      this.selectedListItem = item;
    },
    handleOnRemoveDialogCancel() {
      this.isRemoveDialogShown = false;
    },
    async handleOnRemoveDialogSubmit() {
      await this.deletePersonProfile(this.selectedListItem.id);

      const indexToRemove = this.peopleList.findIndex(person => person.id === this.selectedListItem.id);

      if (indexToRemove !== -1) {
        this.peopleList.splice(indexToRemove, 1);
      }

      this.isRemoveDialogShown = false;
      this.selectedListItem = null;
    },
    handleOnAddDialogCancel() {
      this.isAddDialogShown = false;
    },
    async handleOnAddDialogSubmit(data) {
      await this.createNewPerson(data);

      this.isAddDialogShown = false;
    },
    handleOnChangeDialogCancel() {
      this.isChangeDialogShown = false;
    },
    async handleOnChangeDialogSubmit() {
      await this.updatePerson(this.selectedListItem);
      await this.getAllPeopleList();

      this.isChangeDialogShown = false;
    },
    async handleOnTableReload() {
      await this.getAllPeopleList();
    },
  },
  async mounted() {
    await this.getAllPeopleList();
  },
};

</script>
