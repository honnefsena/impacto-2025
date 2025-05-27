<template>
  <div class="home">
    <div class="banner">
      <img src="/banner-home.png" alt="Conferência Impacto 2025" />
    </div>
    <div class="blocks">
      <div class="block">
        <div class="block-content">
          <img src="/home-block-weather.png" alt="Nuvens" />
          <h2>26º</h2>
          <p>Santa Rosa - RS</p>
        </div>
      </div>
      <div class="block">
        <div class="block-content">
          <img src="/home-block-counter.png" alt="Contagem regressiva" />
          <h2>44</h2>
          <p>dias para o Impacto</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {  
  
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blocks {
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-top: 10px;
}
.block {
  width: 167px;
  height: 208px;
  background: url('./home-block-bkg.png') no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  text-align: center;
}
.block h2 {
  font-size: 40px;
  margin: 0;
}
.block p {
  font-size: 0.9rem;
  margin: 0;
}
</style> 