<script setup lang="ts">
const route = useRoute();

onMounted(async () => {
  console.log("it is logged and runs");
  const remoteApp = await import("remote/App");
  console.log("it is never logged and nothing is running after the import");
  remoteApp.default.mount(document.getElementById("app"));
});
</script>

<template>
  <main class="chatbot">
    <h1>Waiting for remote app</h1>
    <div id="app"></div>
  </main>
</template>
<style scoped>
main {
  font-family: "Vazirmatn";
}
</style>
