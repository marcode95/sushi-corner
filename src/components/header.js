export default function header() {
  const content = document.getElementById('content');
  content.innerHTML = `
  <div class="bg-image"></div>
  <div class="buttons">
    <button id="home-button">Home</button>
    <button id="menu-button">Menu</button>
    <button id="contact-button">Contact</button>
  </div>`;
}