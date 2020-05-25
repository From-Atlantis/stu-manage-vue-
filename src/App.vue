<template>
  <div class="wrapper">
    <sys-header></sys-header>
    <sys-menu></sys-menu>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import sysHeader from './components/sysHeader';
import sysMenu from './components/sysMenu';
import addStu from './views/addStu';
import stuList from './views/stuList';

export default {
  name: 'app',
  components: {
    sysHeader,
    sysMenu,
    addStu,
    stuList
  }
}
</script>

<style>
@import url('./Student.css');
</style>
