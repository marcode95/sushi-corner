const menu = () => {
  const content = document.getElementById('content');
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu-page');
  menu.innerHTML = `
  <p class="single-menu-item">
    <span class="japanese">かっぱ巻き</span>
    <span class="english">KAPPA MAKI Japanese Cucumber Roll</span>
    <span class="price">6</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">鉄火巻き</span>
    <span class="english">TEKKA MAKI Tuna Roll</span>
    <span class="price">10</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">ネギトロ巻き</span>
    <span class="english">NEGI TORO MAKI Fatty Tuna & Scallion</span>
    <span class="price">13</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">かっぱ巻き</span>
    <span class="english">KAPPA MAKI Japanese Cucumber Roll</span>
    <span class="price">6</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">鉄火巻き</span>
    <span class="english">TEKKA MAKI Tuna Roll</span>
    <span class="price">10</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">ネギトロ巻き</span>
    <span class="english">NEGI TORO MAKI Fatty Tuna & Scallion</span>
    <span class="price">13</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">かっぱ巻き</span>
    <span class="english">KAPPA MAKI Japanese Cucumber Roll</span>
    <span class="price">6</span>
  </p>`;
  content.appendChild(menu);
};

export { menu as default };