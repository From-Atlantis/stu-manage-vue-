<template>
  <div class="left-menu">
    <dl class="menu-list">
      <dt>学生管理</dt>
      <router-link tag="dd" :to="{name: 'stuList'}">学生列表</router-link>
      <router-link tag="dd" :to="{name: 'addStu'}">新增学生</router-link>
    </dl>
  </div>
</template>