<template>
  <ul class="skill-list-wrap">
    <li class="skill-list" v-for="data in dataList">
      <p class="skill-lang">{{ data.lang }}</p>
      <p class="skill-years"><span class="small">経験年数：</span>{{ data.years }}<span class="small">年</span></p>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  dataList: {
    lang: string,
    years: string,
  }[]
}>()

</script>

<style scoped>
.skill-list-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.skill-list {
  width: calc(100% / 5 - 8px);
  text-align: center;
  border: 1px solid #acacac;
  border-radius: 15px;
  overflow: hidden;
}

.skill-lang {
  padding: 0 0 3px;
  font-size: 1.6rem;
  font-weight: bold;
  background: #626262;
  color: #fff;
}

.skill-years {
  padding: 0 0 3px;
  font-size: 1.6rem;
}

.skill-years .small {
  display: inline-block;
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
  .about-skill {
    gap: 7px;
  }

  .skill-list {
    width: calc(100% / 3 - 7px);
  }

  .skill-lang,
  .skill-years {
    font-size: 1.4rem;
  }

  .skill-lang {
    padding-bottom: 2px;
  }

  .skill-years .small {
    font-size: 1.2rem;
  }
}
</style>