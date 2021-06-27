<template>
  <div>
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card style="display: inline-block" class="box-card">
              <div slot="header" class="clearfix">
                <span>原始报文数据</span>
                <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                <div style="margin: 20px 0;"></div>
                <el-input
                  type="textarea"
                  autosize="true"
                  placeholder="请粘贴报文并点击右方相应按钮进行解析"
                  v-model="textarea1">
                </el-input>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-button style="margin-bottom: 10px" type="primary" @click="v16sh202click">盛宏V16协议CMD202报文解析</el-button>
            <el-button style="margin-bottom: 10px" type="primary">盛宏V28协议CMD202报文解析</el-button>
            <el-button style="margin-bottom: 10px" type="primary">盛宏V16协议CMD104报文解析</el-button>
            <el-button style="margin-bottom: 10px" type="primary">盛宏V28协议CMD104报文解析</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card style="display: inline-block" class="box-card">
              <div slot="header" class="clearfix">
                <span>解析后数据</span>
                <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                <div style="margin: 20px 0;"></div>
                <el-input
                  autosize="true"
                  type="textarea"
                  readonly="true"
                  placeholder="解析后的报文数据"
                  v-model="textarea2">
                </el-input>
              </div>

            </el-card>
          </div>
        </el-col>
      </el-row>


    </div>

  </div>
</template>

<script>
export default {
  name: 'DataGram',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      textarea1: '',
      textarea2: ''
    }
  },
  methods: {
    v16sh202click() {
      this.getRequest("www.baidu.com").then(resp => {
          if (resp) {
            console.log("v16sh202click");

            alert(resp);
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
