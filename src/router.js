import { GalleryPage } from './pages/gallery.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { RootPage } from './pages/root.page';

const routes = {
  public: [
    {
      path: '/',
      component: RootPage,
    },
    {
      path: '/gallery',
      component: GalleryPage,
    },
    {
      path: '/register',
      component: RegisterPage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
  ],
};

export function navigateTo(targetPath) {
  window.history.pushState({}, '', targetPath);
  Router();
}

export function Router() {
  const currentPath = window.location.pathname;
  const publicRoute = routes.public.find((route) => route.path === currentPath);

  if (publicRoute) {
    publicRoute.component();
    return;
  }

  console.warn(`Ruta '${currentPath}' no encontrada.`);
  navigateTo('/');
}

window.onpopstate = Router;
