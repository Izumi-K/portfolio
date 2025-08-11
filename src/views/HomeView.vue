<template>
  <div class="home">
    <div class="home-top">
      <span class="home-icon"><img src="@/assets/img/icon_kame.svg" alt=""></span>
      <div class="home-profile">
        <p class="home-title">Izumi Kameyama's Portfolio.</p>
        <ul class="home-contact">
          <li class="home-contact-list">
            <a href="https://github.com/Izumi-K" class="home-contact-link" target="_blank">
              <img src="@/assets/img/icon-github.png" alt="Githubアイコン" width="20" height="20" class="home-contact-icon">
            </a>
          </li>
          <li class="home-contact-list">
            <a href="mailto:izm.works.3751@gmail.com" class="home-contact-link" target="_blank">
              <img src="@/assets/img/icon-mail.png" alt="メールアイコン" width="20" height="20" class="home-contact-icon">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  height: 100%;
  margin: auto;
}

.home-top {
  text-align: center;
}

.home-icon {
  display: inline-block;
  max-width: 150px;
}

.home-profile {
  margin-top: 30px;
}

.home-title {
  font-size: 2.2rem;
  font-weight: bold;
}

.home-contact {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.home-contact-link:hover {
  opacity: 0.7;
}

.home-contact-icon {
  max-width: 40px;
}

@media screen and (max-width: 768px) {
  .home-top {
    flex-direction: column;
    gap: 10px;
  }

}
</style>