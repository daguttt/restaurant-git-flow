export function LoginPage() {
  const $app = document.getElementById('app');
  if (!$app) throw new Error('App element not found');

  $app.innerHTML = /*html*/ `
    <h1>Iniciar sesión</h1>
  `;
}
