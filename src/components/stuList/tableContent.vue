<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in stuList" :key="index">
        <td>{{item.sNo}}</td>
        <td>{{item.name}}</td>
        <td>{{item.sex ? '女' : '男'}}</td>
        <td>{{item.email}}</td>
        <td>{{new Date().getFullYear() - item.birth}}</td>
        <td>{{item.phone}}}</td>
        <td>{{item.address}}</td>
        <td>
          <button class="edit-btn" data-index @click="edit(item)">编辑</button>
          <button class="del-btn" data-index @click="delStu(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    stuList: {
      get() {
        return this.$store.state.stuList;
      },
      set(val) {
        this.$store.commit('getStuList', val)
      }
    }
  },
  created() {
    this.$api.findByPage(1).then(data => {
      this.stuList = data.data.data.findByPage;
    });
  },
  methods: {
    edit(item) {
      this.showModal(true);
      this.editItem(item);
    },
    delStu(sNo) {
      if(confirm('确定要删除吗')){
        this.$api.delStu(sNo);
        this.$router.go(0);
      }
    },
    ...mapMutations(["showModal", "editItem"])
  }
};
</script>