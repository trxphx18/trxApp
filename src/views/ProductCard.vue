<template>
  <ion-card class="product-card">
    <img :src="product.image" />
    <ion-card-header>
      <ion-card-title>{{ product.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>
        <span>{{ product.price }} บาท</span>
      </p>
      <ion-button expand="block" color="primary" @click="goDetail">
        ดูรายละเอียด
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ProductCard", 
  

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  
  setup(props) {
    const router = useRouter(); 
    
    const goDetail = () => {
      router.push(`/products/${props.product.id}`); 
    };

    return {
      goDetail, 
    };
  },
};
</script>

<style scoped>
.product-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 12px;
}

span {
  color: #059669;
  font-weight: 700;
}
</style>