<template>
  <div>
    <!-- top section -->
    <div
        style="background-color: #990000"
        class="container-lg container-fluid-sm my-2 pt-3 pb-3"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">Events</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
              class="img-header img-fluid"
              src="https://www.mastersofhardcore.com/wp-content/uploads/2022/06/190706_220008_free_festival_delio_hr-scaled.jpeg"
          />
        </div>
        <div
            class="col-md-8 col-9 col-sm-9 my-sm-auto text-center text-sm-start"
        >
          <p class="text-light">
            in this page you can see a list of all festivals all around the Europe also you have an ability to filter
            your festival search base on different categories
          </p>
        </div>
      </div>

      <h2 class="lead py-3 px-5 text-light">Find your interests</h2>
      <div class="row my-2 justify-content-between px-5">
        <div class="col-lg-2 col-md-2 d-grid my-1">
          <button class="btn btn-primary rounded" @click="searchBtnFunction('Dance')">
            Dances
          </button>
        </div>
        <div class="col-lg-2 col-md-2 d-grid my-1">
          <button class="btn btn-primary rounded" @click="searchBtnFunction('Music')">
            Musics
          </button>
        </div>
        <div class="col-lg-2 col-md-2 d-grid my-1">
          <button class="btn btn-primary rounded" @click="searchBtnFunction('Theater')">
            Theaters
          </button>
        </div>
        <div class="col-lg-2 col-md-2 d-grid my-1">
          <button class="btn btn-primary rounded" @click="searchBtnFunction('Opera')">
            Operas
          </button>
        </div>
      </div>
    </div>
    <!-- end of top section -->
    <!-- bottom section -->

    <pointOfInterest
        v-for="(festival, festivalIndex) of data"
        :key="`festival-index-${festivalIndex}`"
        :imgPath="festival.imgPathMain"
        :descripton="festival.descriptionMain"
        :heading="festival.heading"
        :id="festival.id"
    />

    <!-- end of bottom section -->
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belleza", sans-serif;
}

.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import pointOfInterest from "~/components/pointOfInterest.vue";

import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "FestivalPage",
  computed: mapState(["listOrMap"]),
  data() {
    return {
      data: {}
    }
  },
  components: {
    pointOfInterest,
  },
  methods: {
    async searchBtnFunction(category) {
      let filtered = [];
      const {data} = await this.$axios.get("/api/pois");
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === category.toLowerCase()) {
          filtered.push({
            imgPathMain: data[i].imgPathMain,
            descriptionMain: data[i].descriptionMain,
            heading: data[i].heading,
            Neighbourhood: data[i].Neighbourhood,
          });
        }
      }
      this.data = filtered;

      if (filtered.length === 0) {
        alert("there was no result for your search!");
      }
    },
    async searchFunction() {
      let selectTag = document.getElementById("categoryList1"); //Category
      const filter1 = selectTag.options[selectTag.selectedIndex].value;
      selectTag = document.getElementById("categoryList2"); //neighbourhood
      const filter2 = selectTag.options[selectTag.selectedIndex].value;
      const {data} = await axios.get("/api/festival");
      let filtered = [];
      if (filter1 == "Category" || filter2 == "Neighbourhood") {
        alert("Please choose a neighbourhood and a category.");
      } else {
        for (let i = 0; i < data.length; i++) {
          if (filter1 != "All" && filter2 != "All") {
            if (
                data[i].Neighbourhood == filter2 &&
                data[i].category == filter1
            ) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          } else if (filter1 == "All" && filter2 == "All") {
            filtered.push({
              imgPathMain: data[i].imgPathMain,
              descriptionMain: data[i].descriptionMain,
              heading: data[i].heading,
              Neighbourhood: data[i].Neighbourhood,
            });
          } else if (filter1 == "All") {
            if (data[i].Neighbourhood == filter2) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          } else if (filter2 == "All") {
            if (data[i].category == filter1) {
              filtered.push({
                imgPathMain: data[i].imgPathMain,
                descriptionMain: data[i].descriptionMain,
                heading: data[i].heading,
                Neighbourhood: data[i].Neighbourhood,
              });
            }
          }
        }
        this.data = filtered;

        if (filtered.length == 0) {
          alert("there was no result for your search!");
        }
      }
    },
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/pois");
    return {
      data,
    };
  },
};
</script>
