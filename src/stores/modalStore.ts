import { defineStore } from 'pinia'

interface Content {
  thumb: string;
  thumb_2?: string;
  project: string,
  team: string,
  period: string,
  skill: string,
  desc: string;
}

export const useModalStore = defineStore('modal',  {
  state: () => ({
    open: false,
    content: {} as Content,
  }),
  actions: {
    modalOpen(data: Content) {
      this.open = true;
      this.content = data as Content;
      document.body.className = 'modal-open';
    },
    modalClose() {
      this.open = false;
      this.content = {} as Content;
      document.body.className = '';
    },
  }
})