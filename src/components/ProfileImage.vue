<template>
  <img :src="imageLink" alt="profile image" class=" w-8 h-8 object-contain rounded-3xl">
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: 
        "https://images.unsplash.com/photo-1606934555313-cec0ba7ef850?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    }
  }
}
</script>
