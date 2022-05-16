<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="10">
            <el-card style="display: inline-block;width: 100%;border: 0px;margin-left: 10px" class="box-card">
              <div slot="header" class="clearfix">
                <span>原始报文数据</span>
                <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                <div style="margin: 20px 0;"></div>
                <el-input
                  type="textarea"
                  autosize="true"
                  placeholder="请粘贴报文并点击右方相应按钮进行解析"
                  :autosize="{ minRows: 45, maxRows: 45 }"
                  v-model="textarea1">
                </el-input>
              </div>
            </el-card>
        </el-col>


        <el-col :span="4">

          <h1>充电桩报文解析器 V1.5 </h1>
          <el-popover
            placement="top-start"
            title="作者:肖俊贤 "
            width="200"
            trigger="hover"
            >
            <div>
              <p>有任何问题请联系微信：</p>
              <img :src="img"  height="200" width="200"/>
            </div>

            <el-link slot="reference" icon="el-icon-edit">Designed By XJX</el-link>

<!--            <el-button slot="reference">hover 激活</el-button>-->
          </el-popover>
          <div>
          <template>
            <el-radio v-model="multiFlag" label="0" style="margin-top: 100px;margin-left: 30px">单报文解析</el-radio>
            <el-radio v-model="multiFlag" label="1" style="margin-top: 100px">多报文解析</el-radio>
          </template>
          </div>
          <div>
            <el-button style="margin: auto;margin-top: 150px;width: 235px" type="primary" plain @click="getTextArea2('SH_V16')">盛宏V16</el-button>
<!--            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="primary" plain @click="v16sh202click">盛宏V16协议CMD202报文解析</el-button>-->
            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="success" plain @click="getTextArea2('SH_V28')">盛宏V28</el-button>
<!--            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="success" plain @click="v28sh202click">盛宏V28协议CMD202报文解析</el-button>-->
            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="warning" plain @click="getTextArea2('KSTAR_V1')">科士达V1</el-button>
<!--            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="warning" plain @click="v1ksd14click">科士达V1协议CMD14报文解析</el-button>-->
            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="danger" plain @click="getTextArea2('KSTAR_V2')">科士达V2</el-button>
<!--            <el-button style="margin: auto;margin-top: 50px;width: 235px" type="danger" plain @click="v2ksd14click">科士达V2协议CMD14报文解析</el-button>-->
          </div>
        </el-col>
        <el-col :span="10">
            <el-card style="display: inline-block;width: 100%;margin-right: 10px" class="box-card">
              <div slot="header" class="clearfix">
                <span>解析后数据</span>
                <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                <div style="margin: 20px 0;"></div>
                <el-input
                  autosize="true"
                  type="textarea"
                  :readonly=true
                  placeholder="解析后的报文数据"
                  :autosize="{ minRows: 45, maxRows: 45 }"
                  v-model="textarea2">
                </el-input>
              </div>

            </el-card>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>

import img from "../assets/weixin.jpg";
export default {
  name: 'DataGram',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      textarea1: '',
      textarea2: '',
      multiFlag: '0',
      img: img
    }
  },
  methods: {
    getTextArea2(val){
      if(this.multiFlag == '0') {
        this.postRequest("/datagramAnalysis/chargeAnalysis",{
          'protocolCode':val,
          'datagram': this.textarea1
        }).then(resp => {
            if (resp) {
              console.log('resp')
              console.log(resp)
              this.textarea2 = resp.data
            }
          }
        )
      } else if(this.multiFlag == '1') {
        this.postRequest("/datagramAnalysis/chargeBatchAnalysis",{
          'protocolCode':val,
          'datagram': this.textarea1
        }).then(resp => {
            if (resp) {
              this.textarea2 = ''
              console.log('resp')
              console.log(resp)
              for(const i in resp.data) {
                var a = resp.data[i].dateTime + ":"
                var b = resp.data[i].data + '\n\n'
                this.textarea2 = this.textarea2 + a + b
              }
            }
          }
        )
      }
    },
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
