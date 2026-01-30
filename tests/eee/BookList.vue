<template>
<BaseLayout title="รายการหนังสือ">
<ion-searchbar v-model="q" @ionInput="filter" placeholder="ค้นหา..." />
<ion-list>
<BookCard
v-for="b in filtered"
:key="b.id"
:book="b"
@select="open"
>
<template #extra>
<ion-badge
:color="b.available_copies > 0 ? 'success': 'danger'"
slot="end"
>
{{ b.available_copies > 0 ? "ว่าง" : "ถูกยืม" }}
</ion-badge>
</template>
</BookCard>
</ion-list>
</BaseLayout>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BookCard from "../views/BookCard.vue";
import BaseLayout from "../components/BaseLayout.vue";
import booksData from "../../src/stores/Books.json";
const router = useRouter();
const q = ref("");
const books = booksData;
const filtered = ref(books);
function filter() {
const t = q.value.toLowerCase();
filtered.value = books.filter(
(b) =>
b.title.toLowerCase().includes(t) || b.author.toLowerCase().includes(t) );
}
function open(id) {
router.push({ name: "BookDetail", params: { id } });
}
</script>