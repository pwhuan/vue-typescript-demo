<template>
  <div class="about">
    <div class="clearfix">
      <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" :fileList="fileList" @preview="handlePreview" @change="handleChange">
        <div v-if="fileList.length < 3">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default Vue.extend({
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
      ]
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview(file: any) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChange({ fileList }: any) {
      this.fileList = fileList;
    }
  }
});
</script>




<style lang="less">
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>


