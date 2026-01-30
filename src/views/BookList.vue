<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>รายการหนังสือ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col 
            size="12" 
            size-sm="6" 
            size-md="4" 
            v-for="book in books" 
            :key="book.id"
          >
            <BookCard 
              :title="book.title" 
              :author="book.author"
              :price="book.price" 
              @delete-book="onDelete(book.id)" 
            />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol 
} from "@ionic/vue";
import BookCard from "../../tests/eee/BookCard.vue";

export default {
  name: "BookList",
  components: { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonGrid, 
    IonRow, 
    IonCol, 
    BookCard 
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "การเขียนโปรแกรม Vue.js",
          author: "สมชาย ใจดี",
          price: "350",
        },
        {
          id: 2,
          title: "พื้นฐาน JavaScript",
          author: "สมหญิง รักเรียน",
          price: "420",
        },
        {
          id: 3,
          title: "Ionic Framework",
          author: "วิชัย นักพัฒนา",
          price: "480",
        },
      ],
    };
  },
  methods: {
    onDelete(bookId) {
      this.books = this.books.filter(book => book.id !== bookId);
    }
  }
};
</script>