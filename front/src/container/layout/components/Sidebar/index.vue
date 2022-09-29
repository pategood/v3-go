<template>
  <!-- :collapse="isCollapse" -->
  <el-menu 
        class="sidebar-el-menu"
        :default-active="onRoutes"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
            <span>Group One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

</script>

<style lang="scss" scoped></style>
