<script>
export default {
  name: "BookCard",
  props: {
    bookTitle: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteBook() {
      this.$emit("remove");
    }
  }
};
</script>