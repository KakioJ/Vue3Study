<template>
    <el-container style="height: 100%;">
    <el-aside width="200px" style="background-color: #flflfl;">
        <div></div>
        <el-menu 
        mode="vertical"
        background-color="flflfl"
        text-color="#777777"
        active-text-color="#000000"
        :default-active="0"
        @select="selectItem">
            <el-menu-item
            v-for="item in items"
            :index="item.index"
            :key="item.index">
                <div id="text">{{ item.title }}</div>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-main>
        <Markdown :content="content"></Markdown>
    </el-main>
    </el-container>
</template>
<script>
    import Markdown from "./MarkdownItem.vue";
    import FileManager from "@/tools/FileManager";
    export default {
        props:["items"],
        components:{

        },
    };
</script>
<style scoped>
.el-menu-item.is-active {
    background-color: #ffffff !important;
}
</style>