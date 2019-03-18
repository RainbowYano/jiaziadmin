<template>
  <div class="layout">
    <el-container>
      <!-- Aside -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-submenu :index="index + ''" v-for="(item,index) in menuList" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="subitem.path" v-for="(subitem,subindex) in item.children" :key="subindex">{{subitem.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- Header -->
        <el-header>
          <i class="el-icon-date"></i>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!-- Main -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
import { getMenu } from "@/api/login.js";
export default {
  data() {
    return {
        menuList:[]
    };
  },

  methods: {
    getData() {
      getMenu().then(res => {
        this.menuList = res.data
        // console.log(res.data);
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style lang='less'>
.layout {
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
    text-align: left;
  }
  .el-menu {
    border: none;
  }
  .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  .el-icon-date {
    margin-right: 10px;
  }
}
</style>
<style lang='less' scoped>
.layout {
  height: 100%;
}
</style>
