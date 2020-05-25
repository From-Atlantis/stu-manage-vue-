<template>
  <form class="add-student student-data">
    <div>
      <label for="id">学号</label>
      <input type="text" id="id" name="sNo" v-model="stuMsg.sNo" />
    </div>
    <div>
      <label for="name">姓名</label>
      <input type="text" id="name" name="name" v-model="stuMsg.name" />
    </div>
    <div>
      <label for>性别</label>
      <input type="radio" value="0" name="sex" checked @change="editSex(0)" /> 男&nbsp;
      <input type="radio" value="1" name="sex" @change="editSex(1)" /> 女
    </div>
    <div>
      <label for="email">邮箱</label>
      <input type="text" name="email" id="email" v-model="stuMsg.email" />
    </div>
    <div>
      <label for="birth">年龄</label>
      <input type="text" name="birth" id="birth" v-model="stuMsg.birth" />
    </div>
    <div>
      <label for="phone">手机号</label>
      <input type="text" name="phone" id="phone" v-model="stuMsg.phone" />
    </div>
    <div>
      <label for="address">住址</label>
      <input type="text" name="address" id="address" v-model="stuMsg.address" />
    </div>
    <div class="handle">
      <input type="button" class="btn add-submit" value="提交" @click="commit" />
      <input type="button" class="btn add-reset" value="重置" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      stuMsg: {}
    };
  },
  methods: {
    commit() {
      this.$api.addStu(this.stuMsg).then(data => {
        console.log(data);
        if(data.data.status == 'success') {
          alert('提交成功');
        }
      });
    },
    editSex(val) {
      this.stuMsg.sex = val;
    }
  }
};
</script>