<template>
  <div class="content_container">
    <div>List Category</div>
    <v-dialog v-model="dialogCreateUser" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add Category
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Category</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogCreateUser = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogCreateUser = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ListCategory :categories="categories"/>
  </div>
</template>

<script>
import ListCategory from "../../components/categories/ListCategory.vue";
export default {
  name: "ListCategoryPage",
  components: { ListCategory },
  data: () => ({
    categories: [],
    dialogCreateUser: false,
  }),
  methods: {
    getCategories() {
      this.categories = [
        { name: "Dong vat", nameEng: "Animal", description: "Dong Vat", id: 1 , images: 'https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'},
      ];
    },
  },
  created: function () {
    this.getCategories();
  },
};
</script>

<style scoped>
.content_container {
  width: 100%;
  padding: 4px;
}
</style>