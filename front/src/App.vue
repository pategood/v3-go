<script lang="ts" setup>
  import layout from '@/container/layout/index.vue';
  import { RouterLink, RouterView } from "vue-router";
  </script>
  
  <template>
    <div>
      <router-view v-if="$route.path === '/login'"></router-view>
      <layout v-else></layout>
    </div>
  </template>
  
  <style scoped></style>
  