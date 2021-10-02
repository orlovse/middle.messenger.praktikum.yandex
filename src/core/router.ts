import { appendBlockToDOM } from '../utils/appendBlockToDOM';
import { IBlock, RoutePropsType } from '../types';

class Route {
  _pathname: string;
  _block: IBlock | null;
  _props: RoutePropsType;
  _lastPathname: string;

  constructor(pathname: string, block: IBlock, props: RoutePropsType) {
    this._pathname = pathname;
    this._block = block;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
      this._lastPathname = pathname;
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return !!pathname.match(this._pathname);
  }

  render() {
    this._block && appendBlockToDOM(this._props.rootQuery, this._block);
  }

  getPathname() {
    return this._lastPathname;
  }
}

export class Router {
  static __instance: Router;

  routes: Route[];
  history: History;
  _currentRoute: Route | null;
  _rootQuery: string;

  constructor(rootQuery?: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery || '';

    Router.__instance = this;
  }

  use(pathname: string, block: IBlock): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.addEventListener('popstate', (event: PopStateEvent) => {
      const { currentTarget } = event;
      this._onRoute((currentTarget as typeof window)?.location?.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    if (route) {
      route.render();
    }
  }

  go(pathname: string) {
    if (this.getUrlParam() !== pathname) {
      this.history.pushState({ url: pathname }, pathname, pathname);
      this._onRoute(pathname);
    }
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname)) || null;
  }

  getCurrentRoute() {
    return document.URL;
  }

  getUrlParam() {
    const pathArr = window.location.pathname.split('/');
    return pathArr[pathArr.length - 1];
  }
}
