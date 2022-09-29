<template>
  <div>
    <el-container>
      <el-aside>
        <Sidebar :routes="staticRoutes"></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <Head></Head>
        </el-header>
        <!-- <el-main>
            <router-view v-slot="{Component}">
              <transition name="fade-transform" mode="out-in">
                <component class="view" :is="Component"></component>
              </transition>
            </router-view>
            <Drawer></Drawer>
        </el-main> -->
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { staticRoutes } from '@/router/staticRoutes';
import Sidebar from "./components/Sidebar/index.vue";
import Head from "./components/Header/index.vue";
import Drawer from "./components/Drawer/index.vue";


</script>

<style></style>