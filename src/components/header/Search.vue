<template>
  <div class="search">
      <input type="text" placeholder="Tìm kiếm">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.0004 19.0004L14.6504 14.6504" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style>
  .search{
    position: relative;
    width: 294px;
  }
  .search input{
    width: 100%;
    border: 1px solid #B7B7B7;
    border-radius: 20px;
    padding: 6px 20px;
    font-size: 16px;
    outline: none;
  }
  .search .search-icon{
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  }
</style>