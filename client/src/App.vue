<template>
  <div class="w-screen h-screen flex flex-col">
    <header class="w-full bg-side1 h-12 flex justify-center items-center flex-shrink-0">header</header>
    <div class="flex w-full flex-1">
      <nav class="w-[400px] flex-shrink-0 bg-purple-500 flex">
        <div class="w-16 bg-side1">
          
        </div>
        <div class="flex-1 bg-purple-800 bg-side1">
          <div class="w-full h-full bg-side2 rounded-l-lg">

          </div>
        </div>
      </nav>
      <main class="flex-1 h-full bg-gray-50">
        <router-view></router-view>
      </main>
    </div>
  </div>


</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>
