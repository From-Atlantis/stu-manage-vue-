<template>
  <div class="student-list-content student-data">
    <search-student></search-student>
    <page-search></page-search>
    <table-content></table-content>
    <transition>
      <edit-student v-show="modal"></edit-student>
    </transition>
  </div>
</template>

<style>
  .v-enter {
    top: -100%;
    height: 0;
  }
  .v-enter-to {
    top: 0;
    height: 100%;
  }
  .v-leave-to {
    top: -100%;
    height: 0;
  }
  .v-leave {
    top: 0;
    height: 100%;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .3s;
  }
</style>

<script>
import searchStudent from "../components/stuList/searchStudent";
import pageSearch from "../components/stuList/pageSearch";
import tableContent from "../components/stuList/tableContent";
import editStudent from "../components/stuList/editStudent";
import { mapState } from "vuex";

export default {
  components: {
    searchStudent,
    pageSearch,
    tableContent,
    editStudent
  },
  computed: {
    ...mapState(["modal"])
  }
};
</script>