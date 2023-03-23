<script setup>
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-empty description="空空如也~~~~"></el-empty>
    <h2>各类按钮尺寸</h2>
    <el-button >默认按钮</el-button>
    <el-button size="medium">中等按钮</el-button>
    <el-button size="small">小型按钮</el-button>
    <el-button size="mini">超小按钮</el-button>
    <h2>各类按钮类型</h2>
    <el-button type="primary">常规按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <h2>按钮的各种配置属性</h2>
    <el-button type="primary" :plain="true">描边</el-button>
    <el-button type="primary" :round="true">圆角</el-button>
    <el-button type="primary" :circle="true">圆形</el-button>
    <el-button type="primary" :disable="true">禁用</el-button>
    <el-button type="primary" :loading="true">加载</el-button>
    <h2>使用内置图标构建的按钮</h2>
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>









  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
