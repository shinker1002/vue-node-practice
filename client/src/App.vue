<template>
  <div class="w-screen h-screen flex flex-col">
    <header class="w-full bg-side1 h-12 flex justify-center items-center flex-shrink-0">header</header>
    <div class="flex w-full flex-1">
      <nav class="w-[400px] flex-shrink-0 bg-purple-500 flex">
        <div class="w-16 bg-side1 flex flex-col p-1 items-center">
          <div class="mb-3" v-for="(el, key) in groups">
            <img class="w-12 h-12 rounded-full" :key="el.groupId" @click="() => getGroupDetail(el.groupId)" src="https://source.unsplash.com/random/300×300" alt="">
          </div>
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
  import { getGroups, getGroupDetail } from './api/group/group';
  export default {
    data() {
      return {
        groups: [],
        groupDetail: []
      }
    },
    created() {
      getGroups().then((res) => {
        this.groups = res.data.groups
      })
    },
    name: 'App',
    components: {
    },
    methods: {
      getGroupDetail: getGroupDetail
    }
  }
</script>
