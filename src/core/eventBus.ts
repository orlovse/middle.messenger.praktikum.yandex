export class EventBus {
  listeners: Record<string, Function[]>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`No event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: any[]) {
    if (this.listeners[event] === undefined) {
      throw new Error(`No event: ${event}`);
    }

    this.listeners[event].forEach((callback) => {
      callback(...args);
    });
  }
}
