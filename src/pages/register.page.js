export function RegisterPage() {
  const $app = document.getElementById('app');
  if (!$app) throw new Error('App element not found');

  $app.innerHTML = /*html*/ `
    <h1>Registro</h1>
  `;
}
