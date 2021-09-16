<template>
  <div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/checkbox" class="list-group-item">Checkbox</router-link>
          <router-link to="/icon" class="list-group-item">Icon</router-link>
          <router-link to="/infiniteScroll" class="list-group-item">InfiniteScroll</router-link>
          <router-link to="/layout" class="list-group-item">Layout</router-link>
          <router-link to="/select" class="list-group-item">Select</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
