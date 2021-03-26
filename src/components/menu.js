export default function menu() {
  const content = document.getElementById("content");
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu-page')
  menu.innerHTML = `
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>
  <p class="single-menu-item">
    <span class="japanese">サーモン巻き</span>
    <span class="english">SALMON MAKI Salmon Roll</span>
    <span class="price">7</span>
  </p>`
  content.appendChild(menu);
;
}