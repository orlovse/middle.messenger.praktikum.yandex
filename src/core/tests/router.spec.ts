import 'jsdom-global';
import { expect } from 'chai';
import { Router } from '../Router';
import { createBlock } from './../createBlock';

// @ts-ignore
global.DOMParser = window.DOMParser;

describe('Router test', () => {
  const router = new Router();
  const componentOne = createBlock({ template: '' });
  const componentTwo = createBlock({ template: '' });
  router.use('/login', componentOne).use('/profile', componentTwo).start();

  it('Should works add new routes', () => {
    expect(router.routes.length).to.equal(2);
  });

  it('Should be correct elements on paths', () => {
    expect(router.getRoute('/login')?._block).to.deep.equal(componentOne);
    expect(router.getRoute('/profile')?._block).to.deep.equal(componentTwo);
  });
});
