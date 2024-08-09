import './style.css';

function App() {
  const $app = document.getElementById('app');
  if (!$app) throw new Error('App element not found');

  $app.innerHTML = /*html*/ `
    </h1>Hello, World!</h1>
  `;

  // TODO: Add Router
}

document.addEventListener('DOMContentLoaded', App);
