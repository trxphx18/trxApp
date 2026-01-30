<template>
  <BaseLayout title="รายละเอียดหนังสือ" :showBack="true">

    <!-- ถ้ามีข้อมูลหนังสือ -->
    <ion-list v-if="book" class="book-detail">

      <!-- ปกหนังสือ -->
      <ion-item lines="none">
        <img
          :src="book.cover_url"
          class="w-24 h-36 object-cover rounded shadow mx-auto"
        />
      </ion-item>

      <!-- ชื่อหนังสือ -->
      <ion-item>
        <ion-label class="text-center">
          <h2 class="font-bold text-lg">{{ book.title }}</h2>
        </ion-label>
      </ion-item>

      <!-- ผู้แต่ง -->
      <ion-item>
        <ion-label class="text-center">
          <p class="text-gray-700">ผู้แต่ง: {{ book.author }}</p>
        </ion-label>
      </ion-item>

      <!-- ราคา -->
      <ion-item>
        <ion-label class="text-center">
          <p class="text-gray-900 font-semibold">
            ราคา: {{ book.price }} บาท
          </p>
        </ion-label>
      </ion-item>

      <!-- สถานะ -->
      <ion-item>
        <ion-label
          class="text-center"
          :class="book.available_copies > 0 ? 'text-green-600' : 'text-red-600'"
        >
          สถานะ: {{ book.available_copies > 0 ? "ว่าง" : "ถูกยืมแล้ว" }}
        </ion-label>
      </ion-item>
    </ion-list>

    <!-- ไม่มีข้อมูล -->
    <ion-text v-else color="medium" class="w-full flex justify-center py-10">
      <p class="text-center text-lg">ไม่พบข้อมูลหนังสือ</p>
    </ion-text>

    <!-- Footer Buttons -->
    <template #actions>
      <div class="flex flex-col gap-3 w-full max-w-xs mx-auto p-4">

        <ion-button
          expand="block"
          color="success"
          :disabled="book?.available_copies === 0"
          @click="borrowBook"
        >
          ยืมหนังสือ
        </ion-button>

        <ion-button
          expand="block"
          color="danger"
          @click="returnBook"
        >
          คืนหนังสือ
        </ion-button>

      </div>
    </template>

    <!-- Alert -->
    <ion-alert
      :is-open="alert.open"
      :header="alert.title"
      :message="alert.message"
      buttons="['OK']"
      @didDismiss="alert.open = false"
    />
  </BaseLayout>
</template>

<script>
import {
  IonItem,
  IonList,
  IonButton,
  IonLabel,
  IonAlert,
  IonText
} from "@ionic/vue";


import BaseLayout from "../components/BaseLayout.vue";
import booksData from "../stores/Books.json";


export default {
  name: "BookDetail",
  components: {
    BaseLayout,
    IonItem,
    IonList,
    IonButton,
    IonLabel,
    IonAlert,
    IonText
  },

  data() {
    return {
      book: null,

      alert: {
        open: false,
        title: "",
        message: ""
      }
    };
  },

  mounted() {
    const id = Number(this.$route.params.id);
    this.book = booksData.find((b) => b.id === id) || null;
  },

  methods: {
    showAlert(title, msg) {
      this.alert.title = title;
      this.alert.message = msg;
      this.alert.open = true;
    },

    borrowBook() {
      if (this.book.available_copies > 0) {
        this.book.available_copies -= 1;
        this.showAlert("ยืมสำเร็จ", "คุณได้ทำการยืมหนังสือเรียบร้อยแล้ว");
      } else {
        this.showAlert("ไม่สามารถยืมได้", "หนังสือถูกยืมหมดแล้ว");
      }
    },

    returnBook() {
      this.book.available_copies += 1;
      this.showAlert("คืนสำเร็จ", "คุณคืนหนังสือเรียบร้อยแล้ว");
    }
  }
};
</script>

<style scoped>
.book-detail {
  max-width: 450px;
  margin: 0 auto;
}
</style>
