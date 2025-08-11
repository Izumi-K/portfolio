<template>
  <div class="project">
    <section class="section-inner">
      <SectionHeading heading="過去担当案件" />
      <ProjectItem :dataList="projectData" />
    </section>
    <section class="section-inner">
      <SectionHeading heading="個人開発" />
      <ProjectItem :dataList="personalProjectData" />
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '@/components/parts/SectionHeading.vue';
import ProjectItem from '@/components/modules/ProjectItem.vue';

const projectData = [
  {
    thumb: 'img_jetro_1.JPG',
    thumb_2: 'img_jetro_2.JPG',
    project: 'フランス向けの日本酒訴求のキャンペーンサイト',
    team: 'ディレクター1名/デザイナー1名/フロントエンド3名（担当領域：フロントエンド）',
    period: '2019年',
    skill: 'HTML5, CSS3, Stylus, Pug, JavaScript, Nuxt.js',
    desc: 'フランス人向けの日本酒訴求のキャンペーンサイトの新規実装。全体のコンポーネント設計、スタイル調整、モーダルやドロップダウン等の画面上の機能の実装を担当。',
  },
  {
    thumb: 'img_alcon_1.JPG',
    thumb_2: '',
    project: '白内障の紹介サイト',
    team: 'ディレクター1名/デザイナー2名/フロントエンド1名（担当領域：フロントエンド）',
    period: '2019年',
    skill: 'HTML5, CSS3, Stylus, Pug, jQuery, JavaScript, Webpack',
    desc: '白内障基本知識の紹介サイトの新規実装。10~12ページほどの規模。全体のコンポーネント設計〜画面の実装までを一人称で担当。',
  },
  {
    thumb: 'img_ichijo_1.png',
    thumb_2: '',
    project: '工務店のコーポレートサイト',
    team: 'ディレクター2名/デザイナー1名/フロントエンド2名/バックエンド2名（担当領域：フロントエンド）',
    period: '2020年',
    skill: 'HTML5, CSS3, SCSS, Stylus, Pug, jQuery, JavaScript',
    desc: '工務店のコーポレートサイト内の特設LPの新規実装。コーポレートサイト内全体の保守/運用/改修も担当。',
  },
];

const personalProjectData = [
  {
    thumb: 'img_form_1.png',
    thumb_2: 'img_form_2.png',
    project: 'Googleフォームから欠席届',
    team: '個人開発',
    period: '2024年',
    skill: 'GAS（Google Apps Scripit）',
    desc: '常駐先の社内業務にてGASの導入があったためキャッチアップ目的で作成。Googleフォームから回答を行うと、回答を反映した欠席届のPDFデータを指定アドレス宛に送付する。作成データは指定のGoogleドライブに格納する。',
  },
  {
    thumb: 'img_portfolio_1.png',
    thumb_2: '',
    project: '個人ポートフォリオ',
    team: '個人開発',
    period: '2025年',
    skill: 'HTML5, CSS3, JavaScript, TypeScript, Vue.js',
    desc: 'SPAのポートフォリオサイトを作成。',
  },
];

</script>

<style scoped></style>
