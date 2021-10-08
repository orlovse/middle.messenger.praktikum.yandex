import 'jsdom-global';
import { expect } from 'chai';
import { Store, STORE_EVENTS } from '../store';

// @ts-ignore
global.DOMParser = window.DOMParser;

describe('Store test', () => {
  const testStore = new Store();
  testStore.on(STORE_EVENTS.UPDATE, () => {});

  it('Initial store should be empty', () => {
    expect(testStore.get()).to.be.null;
  });

  it('Can update store', () => {
    testStore.update({ id: 1 });
    expect(testStore.get()).to.deep.equal({ id: 1 });
  });

  it('Can update store 2', () => {
    testStore.update({ name: 'Test' });
    expect(testStore.get()).to.deep.equal({ id: 1, name: 'Test' });
  });
});
