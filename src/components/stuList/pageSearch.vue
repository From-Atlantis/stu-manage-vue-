<template>
  <div class="page-search">
    <span class="pre-page" @click="turnPage(-1)">&lt;</span>
    <ul>
      <template v-if="totalPage <= 7">
        <li
          class="num"
          v-for="index in totalPage"
          :key="index"
          :class="{'page-active': curPage == index}"
          @click="turnPage(index)"
        >{{index}}</li>
      </template>
      <template v-if="totalPage > 7">
        <template v-if="curPage <= 4">
          <li
            class="num"
            v-for="index in 6"
            :key="index"
            :class="{'page-active': curPage == index}"
            @click="turnPage(index)"
          >{{index}}</li>
          <li>...</li>
          <li>{{totalPage}}</li>
        </template>
        <template v-if="curPage > 4">
          <li class="num" :class="{'page-active': curPage == 1}" @click="turnPage(1)">1</li>
          <li>...</li>
        </template>
        <template v-if="curPage > 4 && curPage + 3 < totalPage">
          <li
            class="num"
            v-for="index in 5"
            :key="curPage - 3 + index"
            :class="{'page-active': curPage == curPage - 3 + index}"
            @click="turnPage(curPage - 3 + index)"
          >{{curPage - 3 + index}}</li>
          <li>...</li>
          <li>{{totalPage}}</li>
        </template>
        <template v-if="curPage > 4 && curPage + 3 >= totalPage">
          <li
            class="num"
            v-for="index in 6"
            :key="totalPage - 6 + index"
            :class="{'page-active': curPage == totalPage - 6 + index}"
            @click="turnPage(totalPage - 6 + index)"
          >{{totalPage - 6 + index}}</li>
        </template>
      </template>
    </ul>
    <span class="next-page" @click="turnPage(-2)">&gt;</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      totalPage: null,
      curPage: 1
    };
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["getCount", "getStuList"]),
    turnPage(index) {
      if (index > 0) {
        this.curPage = index;
      }
      if (index == -1 && this.curPage > 1) {
        this.curPage--;
      }
      if (index == -2 && this.curPage < this.totalPage) {
        this.curPage++;
      }
      this.$api.findByPage(this.curPage).then(data => {
        this.getStuList(data.data.data.findByPage);
      });
    }
  },
  created() {
    this.$api.findByPage(1).then(data => {
      this.totalPage =
        data.data.data.cont % 5 == 0
          ? parseInt(data.data.data.cont / 5)
          : parseInt(data.data.data.cont / 5) + 1;
      this.getCount(this.totalPage);
    });
  }
};
</script>