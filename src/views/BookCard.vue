<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ author }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p>ราคา: {{ price }} บาท</p>

      <ion-button 
        color="danger" 
        expand="block" 
        @click="deleteBook"
      >
        ลบหนังสือ
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton 
} from "@ionic/vue";

export default {
  name: "BookCard",
  components: { 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton 
  },
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    deleteBook() {
      this.$emit("delete-book");
    }
  }
};
</script>