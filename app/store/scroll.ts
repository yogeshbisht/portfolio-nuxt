import { defineStore } from "pinia";

interface ScrollState {
  scrollPosition: number;
  aboutSectionTop: number;
}

const useScrollStore = defineStore("scroll", {
  state: (): ScrollState => ({
    scrollPosition: 0,
    aboutSectionTop: 0,
  }),

  getters: {
    getScrollPosition(): number {
      return this.scrollPosition;
    },

    getAboutSectionTop(): number {
      return this.aboutSectionTop;
    },
  },

  actions: {
    setScrollPosition(position: number) {
      this.scrollPosition = position;
    },

    setAboutSectionTop(top: number) {
      this.aboutSectionTop = top;
    },
  },
});

export default useScrollStore;
