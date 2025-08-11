<template>
  <ul class="project-list-wrapper">
    <li class="project-list" v-for="data in dataList">
      <div @click="modalStore.modalOpen(data)">
        <span class="project-thumb"><img :src="getImageUrl(data.thumb)" alt="サムネイル画像" width="440" height="280"></span>
      </div>
    </li>
  </ul>
  <Modal />
</template>

<script setup lang="ts">
import Modal from '@/components/modules/Modal.vue';
import { useModalStore } from '@/stores/modalStore.ts'

const modalStore = useModalStore();

defineProps<{
  dataList: {
    thumb: string,
    thumb_2?: string,
    project: string,
    team: string,
    period: string,
    skill: string,
    desc: string
  }[]
}>()

const getImageUrl = (fileName: string) => {
  return new URL(`/src/assets/img/${fileName}`, import.meta.url).href
}

</script>

<style scoped>
.project-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-list {
  max-width: calc(100% / 3 - 15px);
  max-height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: .2s;
}

.project-list:hover {
  transform: scale(1.02);
}

.project-list:hover {
  outline: 6px solid #626262;
}

@media screen and (max-width: 768px) {
  .project-list-wrapper {
    gap: 15px;
  }

  .project-list {
    max-width: calc(100% / 2 - 8px);
    max-height: 110px;
  }

  .project-list:hover {
    outline: 4px solid #626262;
  }
}
</style>