<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>รายการสินค้า</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col 
            size="12" 
            size-sm="6" 
            size-md="4" 
            v-for="item in products" 
            :key="item.id"
          >
            <ProductCard :product="item" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonGrid, IonRow, IonCol 
} from "@ionic/vue";
import ProductCard from "../views/ProductCard.vue"; 

export default {
  name: 'ProductListPage', 
  
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonGrid, IonRow, IonCol, 
    ProductCard 
  },
  
  data() {
    return {
      products: [
        {
          id: 1, 
          name: "กาแฟดำร้อน", 
          price: "60", 
          image: "https://.../6f86db52e185f400.jpg",
        },
        {
          id: 2, 
          name: "ชาเขียวมัทฉะ", 
          price: "80", 
          image: "https://.../a8474677d38bfe4197f2599e611b84b8.jpg",
        },
        {
          id: 3, 
          name: "ช็อกโกแลตเย็น", 
          price: "100", 
          image: "https://.../a84ac6c4ba847537fee4441b89572cff.jpg",
        },
      ],
    };
  }
};
</script>