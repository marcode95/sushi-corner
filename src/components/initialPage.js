export default function initPage() {
  const content = document.getElementById("content");
  content.innerHTML = `
  <h1 class="headline">Sushi Corner</h1>
  <p class="catch-phrase">BEST SUSHI IN TOWN</p>
  <div class="bg-image"></div>
  <div class="buttons">
    <button id="home-button">Home</button>
    <button id="menu-button">Menu</button>
    <button id="contact-button">Contact</button>
  </div>`;
}

