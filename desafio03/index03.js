class IMessageRenderer {
  render(message) {
    throw new Error("render() não implementado.");
  }
}

class ConsoleRenderer extends IMessageRenderer {
  render(message) {
    console.log(message);
  }
}

class HelloWorldService {
  constructor(renderer) {
    this.renderer = renderer;
  }

  sayHello(id) {
    this.renderer.render(`Hello, World! ${id}`);
  }
}


// GRASP: CREATOR


class HelloWorldFactory {
  static createDefault() {
    const renderer = new ConsoleRenderer();   
    const service = new HelloWorldService(renderer);
    return service;
  }
}

const service = HelloWorldFactory.createDefault();
service.sayHello("003");
