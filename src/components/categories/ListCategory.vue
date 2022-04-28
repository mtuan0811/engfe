<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="this.categories"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:[`item.images`]="{ item }">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="60"
          max-width="100"
          :src="item.images"
        ></v-img>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px" v-if="editedItem">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Items</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.nameEng"
                  label="Name English"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-textarea
                  v-model="editedItem.description"
                  label="Description"
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="60"
                  max-width="100"
                  :src="item.images"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeSave"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="closeSave"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ListCategoryComponent",
  components: {},
  props: ["categories"],
  methods: {
    editItem(item) {
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    closeSave() {
      this.dialog = false;
    },
    deleteItem(item) {
      this.editedIndex = this.categories.indexOf(item);
      this.categories.splice(this.editedIndex, 1);
    },
  },
  created: function () {},
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Name", value: "name" },
        { text: "Name English", value: "nameEng" },
        { text: "Description", value: "description" },
        { text: "Image", value: "images" },
        { text: "Actions", value: "actions" },
      ],
      editedItem: null,
    };
  },
};
</script>

<style scoped>
</style>