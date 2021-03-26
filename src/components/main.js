export default function main() {
  const content = document.getElementById('content');
  const main = document.createElement('div');
  main.setAttribute('id', 'main-page');
  main.innerHTML = `
  <h1 class="headline">Sushi Corner</h1>
  <p class="catch-phrase">BEST SUSHI IN TOWN</p>`;
  content.appendChild(main);
}