<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Welcome to micro frontends crash course</p>
  </div>
</template>

<script>
  export default {
    setup() {
      return { message: "Hello Vue! Welcome" };
    },
  };
</script>
