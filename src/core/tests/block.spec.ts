import 'jsdom-global';
import { expect } from 'chai';
import { Block } from '../Block';

// @ts-ignore
global.DOMParser = window.DOMParser;

describe('Block test', () => {
  const childElement = new Block({ id: 0 }, {});
  const element = new Block({ id: 1 }, { childElement });

  it('Element should have child component', () => {
    expect(element.children.childElement).to.equal(childElement);
  });

  it('Element should render with correct props', () => {
    expect(element.props.id).to.equal(1);
  });

  it('setProps should change element props', () => {
    element.setProps({ id: 2 });
    expect(element.props.id).to.equal(2);
  });
});
