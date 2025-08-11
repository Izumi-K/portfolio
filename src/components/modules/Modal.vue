<template>
  <Teleport to="body">
    <div v-if="modalStore.open" class="modal">
      <div @click="modalStore.modalClose" class="modal-overlay"></div>
      <div class="modal-content">
        <button @click="modalStore.modalClose" class="modal-close">
          <img src="@/assets/img/icon-close.svg" alt="閉じるボタン" width="20" height="20">
        </button>
        <div class="modal-inner">
          <div class="modal-thumb-wrapper">
            <span class="modal-thumb">
              <img :src="getImageUrl(modalStore.content.thumb)" alt="案件画像" width="20" height="20">
            </span>
            <span v-if="modalStore.content.thumb_2" class="modal-thumb">
              <img :src="getImageUrl(modalStore.content.thumb_2)" alt="案件画像2" width="20" height="20">
            </span>
          </div>
          <p class="modal-attention">※スクロールできます</p>
          <div class="modal-project">
            <h3 class="project-name">{{ modalStore.content.project }}</h3>
            <div class="project-detail">
              <p class="project-team"><span class="project-hdg">チーム体制：</span>{{ modalStore.content.team }}</p>
              <p class="project-period"><span class="project-hdg">開発時期：</span>{{ modalStore.content.period }}</p>
              <p class="project-skill"><span class="project-hdg">使用技術：</span>{{ modalStore.content.skill }}</p>
              <p class="project-desc"><span class="project-hdg">案件詳細：</span>{{ modalStore.content.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore.ts'

const modalStore = useModalStore();

const getImageUrl = (fileName: string) => {
  return new URL(`/src/assets/img/${fileName}`, import.meta.url).href
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: #fff;
  padding: 50px 30px 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 780px;
  width: 90%;
  max-height: 600px;
  position: relative;
  overflow: auto;
}

.modal-close {
  width: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.modal-thumb-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.modal-thumb {
  max-height: 280px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

.modal-thumb img {
  vertical-align: middle;
}

.modal-attention {
  margin-top: 5px;
  text-align: right;
  font-size: 1.1rem;
}

.modal-project {
  margin-top: 15px;
}

.modal-project .project-name {
  font-weight: bold;
  font-size: 1.8rem;
}

.modal-project .project-detail {
  margin-top: 5px;
  font-size: 1.4rem;
}

.modal-project .project-detail p+p {
  margin-top: 5px;
}

.modal-project .project-hdg {
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .modal-content {
    padding: 50px 15px 15px;
  }

  .modal-thumb-wrapper {
    flex-direction: column;
  }

  .modal-thumb {
    max-height: 180px;
  }
}
</style>