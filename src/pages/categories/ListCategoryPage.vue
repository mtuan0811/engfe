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
                <v-text-field v-model="name" label="Name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="nameEng"
                  label="Name English"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-textarea
                  v-model="description"
                  label="Description"
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-img max-height="100" max-width="200" :src="url"></v-img>
                <v-file-input
                  v-model="file"
                  @change="onFileChange"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="Avatar"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogCreateUser = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ListCategory :categories="categories" />
  </div>
</template>

<script>
import ListCategory from "../../components/categories/ListCategory.vue";
import { mapActions } from "vuex";
export default {
  name: "ListCategoryPage",
  components: { ListCategory },
  data: () => ({
    categories: [],
    dialogCreateUser: false,
    name: "",
    nameEng: "",
    description: "",
    url: null,
    file: null,
  }),
  methods: {
    ...mapActions(["login"]),
    getCategories() {
      this.categories = [
        {
          name: "Dong vat",
          nameEng: "Animal",
          description: "Dong Vat",
          id: 1,
          images:
            "https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
        {
          name: "Dong vat 1",
          nameEng: "Animal 1",
          description: "Dong Vat 1",
          id: 2,
          images:
            "https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
        {
          name: "Dong vat 3",
          nameEng: "Animal 4",
          description: "Dong Vat 5",
          id: 2,
          images:
            "https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
      ];
    },
    closeDialog(){
      this.dialogCreateUser = false
      this.dialogCreateUser1 = true
      this.dialogCreateUser2 = false
      console.log(this.$store)
    },
    onFileChange(image) {
      if (image) {
        this.file = image;
        this.url = URL.createObjectURL(this.file);
        console.log(this.url);
      } else {
        this.file = null;
        this.url = null;
      }
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