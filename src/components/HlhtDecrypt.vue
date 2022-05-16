<template>
  <div>
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="10">
          <el-card style="display: inline-block;width: 100%;border: 0;margin-left: 10px" class="box-card">
            <div slot="header" class="clearfix">
              <span>加密数据</span>
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

          <h1>互联互通数据解析器 V1.4 </h1>
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

          <div style="margin-top: 50px">
            <el-select v-model="value" filterable placeholder="请选择运营商密钥">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.platformName"
                :value="item.id">
              </el-option>
            </el-select>
            <div v-show="this.value==-1">
              <el-input
                style="width: 215px; margin-top: 20px"
                placeholder="请输入数据密钥"
                v-model="dataSecretInput"
                clearable>
              </el-input>

              <el-input
                style="width: 215px;margin-top: 20px"
                placeholder="请输入数据密钥初始化向量"
                v-model="dataSecretIvInput"
                clearable>
              </el-input>
            </div>
            <el-button style="margin: auto;margin-top: 150px;width: 235px" type="primary" plain @click="getHlhtDecrypt">解析</el-button>
          </div>


        </el-col>
        <el-col :span="10">
          <el-card style="display: inline-block;width: 100%;margin-right: 10px" class="box-card">
            <div slot="header" class="clearfix">
              <span>解密数据</span>
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
import {getRequest} from "../utils/api";
import img from "../assets/weixin.jpg";

export default {
  name: "HlhtDecrypt",
  data() {
    return {
      options: [],
      value:'',
      img: img,
      dataSecretIvInput:'',
      dataSecretInput:'',
      textarea2:'',
      textarea1:''
    }
  },
  methods:{
    getPlatformSecretList(){
      this.getRequest("/hlhtDecrypt/getPlatformSecretList").then(resp => {
          if (resp) {
            console.log(resp)
            // this.options = resp.data.map((item)=>{
            //   return JSON.parse(item)
            // })
            this.options = resp.data

            this.options.push(JSON.parse("{\"id\":-1,\"platformName\":\"自定义密钥\",\"dataSecret\":\"\",\"dataSecretIv\":\"\"}"))
            console.log(this.options)

          }
        }
      )
    },
    getHlhtDecrypt(){
      if (this.value===-1){
        this.postRequest("/hlhtDecrypt/getHlhtDecrypt", {'platformId':this.value,'encryptionData':this.textarea1,'dataSecret':this.dataSecretInput,'dataSecretIv':this.dataSecretIvInput}).then(resp => {
            if (resp) {
              console.log(resp)
              this.textarea2 = resp.data
            }
          }
        )
      }else {
        this.postRequest("/hlhtDecrypt/getHlhtDecrypt", {'platformId':this.value,'encryptionData':this.textarea1}).then(resp => {
            if (resp) {
              console.log(resp)
              this.textarea2 = resp.data
            }
          }
        )
      }
    }
  },
  mounted() {
    this.getPlatformSecretList()
  }
}
</script>

<style scoped>

</style>
