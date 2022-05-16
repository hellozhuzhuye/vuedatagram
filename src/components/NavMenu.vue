<template>
  <div id="NavMenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
      active-text-color="#409EFF"
    >
      <template v-for="item in navMenuData">
        <el-menu-item :index="item.index" v-if="!item.child">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "movie",
      navMenuData: [
        { index: "/DataGram", name: "充电桩报文解析器" },
        { index: "/HlhtDecrypt", name: "互联互通数据解析器" }
        // {
        //   index: "2",
        //   name: "我的工作台",
        //   child: [{ index: "2-1", name: "选项1" },{ index: "2-2", name: "选项2" },{ index: "2-3", name: "选项3" }]
        // },
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){
    console.log(this.activeIndex)
    console.log(this.$route.path)
    this.activeIndex = this.$route.path;
  }
};
</script>

<style scoped>
</style>
