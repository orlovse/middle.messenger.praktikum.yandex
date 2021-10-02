import { EventBus } from './../eventBus';
import 'jsdom-global';
import { expect } from 'chai';
import { Block } from '../block';

// @ts-ignore
global.DOMParser = window.DOMParser;

describe('EventBus test', () => {
  const eventBus = new EventBus();
  let firstResult = 1;
  let secondResult = 2;
  const callbackOne = () => {
    firstResult = firstResult + 2;
  };
  const callbackTwo = (props: number) => {
    secondResult = secondResult + props;
  };

  eventBus.on(Block.EVENTS.INIT, callbackOne);
  eventBus.on(Block.EVENTS.FLOW_CDM, callbackTwo);

  it('Mast be defined', () => {
    expect(eventBus).to.exist;
  });

  it('Events should be added', () => {
    expect(eventBus.listeners[Block.EVENTS.INIT]).to.exist;
    expect(eventBus.listeners[Block.EVENTS.FLOW_CDM]).to.exist;
  });

  it('Events should run callbacks', () => {
    eventBus.emit(Block.EVENTS.INIT);
    eventBus.emit(Block.EVENTS.FLOW_CDM, 3);
    expect(firstResult).to.be.equal(3);
    expect(secondResult).to.be.equal(5);
  });
});
