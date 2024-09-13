<template>
  <v-sheet class="d-flex justify-center flex-wrap text-center mx-auto mt-10 mx-auto pa-10" color="grey lighten-5">
    <v-container>
      <v-carousel cycle show-arrows="hover" hide-delimiter-background continuous>
        <!-- Carousel Item (displaying 3 cards at a time) -->
        <v-carousel-item v-for="(group, index) in groupedItems" :key="index">
          <v-row>
            <v-col v-for="(item, i) in group" :key="i" md="6" lg="4" xl="3" sm="6" cols="12">
              <v-card density="comfortable" class="elevation-10" rounded="lg">
                <v-card-item>
                  <v-img color="surface-variant" :src="item.img" :alt="$t(item.title) + ' lfgl-tech'" />
                </v-card-item>
                <v-card-title :title="$t(item.title)">{{ $t(item.title) }} </v-card-title>
                <v-card-text>{{ $t(item.description) }}</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn class="ma-2 px-5" color="primary" variant="tonal" rounded="xl">
                    Voir plus
                    <v-icon icon="mdi-arrow-right" end></v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-btn  variant="flat" class="ma-2" flat color="primary">Voir notre expertise</v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
import customSoftwareDevelopmentImg from "../assets/service-imgs/developpement-logiciel.webp"
import microservicesAndApisImg from "../assets/service-imgs/microservice-draft.webp"
import digitalTransformationImg from "../assets/service-imgs/Transformation-digitale-du-retail.webp"
import cloudComputingAndDevOps from "../assets/service-imgs/Devops-And-Cloud.webp"
import identityAndAccessManagementImg from "../assets/service-imgs/identityAndAccessManagement.webp"
import technicalTrainingtImg from "../assets/service-imgs/technicalTraining.webp"
import innovationConsultingImg from "../assets/service-imgs/innovationConsulting.webp"
import websiteAndEcommerceImg from "../assets/service-imgs/websiteAndEcommerce.webp"
export default {
  mounted() {
    this.updateChunkSize(); // Set initial chunk size
  },
  data() {
    return {
      chunkSize: 3,
      items: [
        { title: 'services.items.customSoftwareDevelopment.title', description: "services.items.customSoftwareDevelopment.description", img : customSoftwareDevelopmentImg },
        { title: 'services.items.microservicesAndApis.title', description: "services.items.microservicesAndApis.description" , img : microservicesAndApisImg},
        { title: 'services.items.digitalTransformation.title', description: "services.items.digitalTransformation.description",img : digitalTransformationImg },
        { title: 'services.items.cloudComputingAndDevOps.title', description: "services.items.cloudComputingAndDevOps.description" ,img : cloudComputingAndDevOps},
        { title: 'services.items.identityAndAccessManagement.title', description: "services.items.identityAndAccessManagement.description" ,img : identityAndAccessManagementImg},
        { title: 'services.items.technicalTraining.title', description: "services.items.technicalTraining.description" , img : technicalTrainingtImg},
        { title: 'services.items.innovationConsulting.title', description: "services.items.innovationConsulting.description", img : innovationConsultingImg},
        { title: 'services.items.websiteAndEcommerce.title', description: "services.items.websiteAndEcommerce.description",img : websiteAndEcommerceImg },
      ]
    };
  },
  computed: {
    groupedItems() {
      console.log(this.items);
      // S'assurer que items est défini et est un tableau avant de le traiter
      if (!Array.isArray(this.items)) {
        return [];
      }

      // Grouper les items par taille de chunkSize
      return this.items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / this.chunkSize);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // démarrer un nouveau groupe
        }

        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    }
  },
  watch: {
    '$vuetify.display.width'() {
      this.updateChunkSize(); // Call function when screen width changes
    },
  },

  methods: {

    updateChunkSize() {
      if (this.$vuetify.display.xlAndUp) {
        this.chunkSize = 4; // 5 cards on extra-large screens
      }
      else if (this.$vuetify.display.lgAndUp) {
        this.chunkSize = 3; // 4 cards on large screens
      } else if (this.$vuetify.display.smAndUp) {
        this.chunkSize = 2; // 3 cards on medium screens
      } else {
        this.chunkSize = 1; // 1 card on small screens
      }
    },
  },
};
</script>
