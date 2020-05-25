<template>
  <div class="edit-student-content">
    <div class="mask" @click="hideModal"></div>
    <form class="edit-student">
      <h3>编辑信息</h3>
      <div>
        <label for="edit-id">学号</label>
        <input
          type="text"
          id="edit-id"
          name="sNo"
          :value="item.sNo"
          @input="changeStu('sNo', $event.target.value)"
          readonly
        />
      </div>
      <div>
        <label for="edit-name">姓名</label>
        <input
          type="text"
          id="edit-name"
          name="name"
          :value="item.name"
          @input="changeStu('name', $event.target.value)"
          ref="name"
        />
      </div>
      <div>
        <label for>性别</label>
        <input type="radio" name="sex" :checked="!item.sex" @change="changeStu('sex', 0)" /> 男&nbsp;
        <input type="radio" name="sex" :checked="item.sex" ref="sex" @change="changeStu('sex', 1)" /> 女
      </div>
      <div>
        <label for="edit-email">邮箱</label>
        <input
          type="text"
          name="email"
          id="edit-email"
          ref="email"
          :value="item.email"
          @input="changeStu('email', $event.target.value)"
        />
      </div>
      <div>
        <label for="edit-birth">出生年</label>
        <input
          type="text"
          name="birth"
          id="edit-birth"
          ref="birth"
          :value="new Date().getFullYear() - item.birth"
          @input="changeStu('birth', $event.target.value)"
        />
      </div>
      <div>
        <label for="edit-phone">手机号</label>
        <input
          type="text"
          name="phone"
          id="edit-phone"
          ref="phone"
          :value="item.phone"
          @input="changeStu('phone', $event.target.value)"
        />
      </div>
      <div>
        <label for="edit-address">住址</label>
        <input
          type="text"
          name="address"
          id="edit-address"
          ref="address"
          :value="item.address"
          @input="changeStu('address', $event.target.value)"
        />
      </div>
      <div class="handle">
        <input type="button" class="btn edit-submit" value="提交" @click="submit" />
        <input type="button" class="btn edit-reset" value="重置" @click="reset" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapState(["item"])
  },
  methods: {
    hideModal() {
      this.$store.commit("showModal", false);
    },
    changeStu(key, value) {
      this.user[key] = value;
    },
    submit() {
      let user = Object.assign({}, this.item, this.user);
      this.$api.updateStu(user).then(data => {
        if (data.data.status == "success") {
          alert("修改成功");
          this.$router.go(0);
        } else if (data.data.status == "fail") {
          alert(data.data.msg);
        }
      });
    },
    reset() {
      for (let prop in this.$refs) {
        if (prop != "sex") {
          this.user[prop] = "";
          this.$refs[prop].value = "";
        } else if (prop == "sex") {
          this.user.sex = 0;
          this.$refs.sex.checked = true;
        }
      }
    }
  }
};
</script>