import { Router } from './router';
import './style.css';

function App() {
  const $app = document.getElementById('app');
  if (!$app) throw new Error('App element not found');

  Router();
}

document.addEventListener('DOMContentLoaded', App);
