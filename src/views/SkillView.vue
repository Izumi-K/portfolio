<template>
  <div class="skill">
    <div class="section-inner">
      <div class="skill-inner">
        <SectionHeading heading="保有技術" />
        <SectionSubHeading subheading="言語/ライブラリ/フレームワーク" />
        <SkillItem :dataList="skillData" />
      </div>
      <div class="skill-inner">
        <SectionSubHeading subheading="デザインツール" />
        <SkillItem :dataList="designTool" />
      </div>
      <div class="skill-inner">
        <SectionSubHeading subheading="その他" />
        <SkillItem :dataList="otherTool" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '@/components/parts/SectionHeading.vue';
import SectionSubHeading from '@/components/parts/SectionSubHeading.vue';
import SkillItem from '@/components/modules/SkillItem.vue';

const skillData = [
  {
    lang: 'HTML5',
    years: '7',
  },
  {
    lang: 'CSS3',
    years: '7',
  },
  {
    lang: 'SCSS',
    years: '5',
  },
  {
    lang: 'Stylus',
    years: '2',
  },
  {
    lang: 'Pug',
    years: '2',
  },
  {
    lang: 'JavaScript',
    years: '6',
  },
  {
    lang: 'jQuery',
    years: '4',
  },
  {
    lang: 'TypeScript',
    years: '1',
  },
  {
    lang: 'Vue.js',
    years: '3',
  },
  {
    lang: 'Nuxt.js',
    years: '1',
  },
];

const designTool = [
  {
    lang: 'Photoshop',
    years: '6',
  },
  {
    lang: 'illustrator',
    years: '6',
  },
  {
    lang: 'XD',
    years: '4',
  },
  {
    lang: 'Sketch',
    years: '3',
  },
  {
    lang: 'Figma',
    years: '1',
  },
];

const otherTool = [
  {
    lang: 'Git',
    years: '7',
  },
  {
    lang: 'Backlog',
    years: '3',
  },
  {
    lang: 'Jira',
    years: '4',
  },
  {
    lang: 'Confuluence',
    years: '4',
  },
  {
    lang: 'Slack',
    years: '6',
  },
  {
    lang: 'Chatwork',
    years: '6',
  },
  {
    lang: 'LINE WORKS',
    years: '2',
  },
];

</script>

<style scoped>
.skill-inner {
  margin-top: 40px;
}

.skill-inner+.skill-inner {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {

  .skill-inner,
  .skill-inner+.skill-inner {
    margin-top: 20px;
  }
}
</style>
