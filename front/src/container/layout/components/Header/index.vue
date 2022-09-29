<template>
    <div class="header_main">
        <div class="collapseicon">
            <el-breadcrumb separator="/">
                <transition-group name="breadcrumb">
                    <el-breadcrumb-item key="/" :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item
                        v-for="(item, index) in routeListConfig.currentRouteList"
                        :key="index"
                        ><a>{{ item.name }}</a></el-breadcrumb-item
                    >
                </transition-group>
            </el-breadcrumb>
        </div>
    </div>
</template>




<script lang="ts" setup>
import { reactive, watch } from 'vue';

const route = useRoute();
let routeListConfig: any = reactive({
    currentRouteList: []
});

watch(
    () => route.path,
    () => {
    routeListConfig.currentRouteList = route.matched;
    }
);
console.log(route, 3223);

</script>

<style lang="less" scoped>
</style>