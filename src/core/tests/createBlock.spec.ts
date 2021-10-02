import { Block } from './../block';
import { createBlock } from './../createBlock';
import 'jsdom-global';
import { expect } from 'chai';

// @ts-ignore
global.DOMParser = window.DOMParser;

describe('createBlock test', () => {
  const childElement = createBlock({ template: '' });
  const element = createBlock({
    template: '',
    components: { childElement },
    props: { id: 1 }
  });

  it('Element should extends from Block', () => {
    expect(element).to.instanceof(Block);
  });

  it('Element should have child component', () => {
    expect(element.children.childElement).to.deep.equal(childElement);
  });

  it('Element should render with correct props', () => {
    expect(element.props.id).to.equal(1);
  });

  it('setProps should change element props', () => {
    element.setProps({ id: 2 });
    expect(element.props.id).to.equal(2);
  });
});
