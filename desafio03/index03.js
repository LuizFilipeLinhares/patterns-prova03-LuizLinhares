// Renderer base
class IMessageRenderer {
  render(message) {
    throw new Error("render() não implementado.");
  }
}

// Implementação concreta
class ConsoleRenderer extends IMessageRenderer {
  render(message) {
    console.log(message);
  }
}

// Serviço que usa renderer
class HelloWorldService {
  constructor(renderer) {
    this.renderer = renderer;
  }

  sayHello(id) {
    this.renderer.render(`Hello, World! ${id}`);
  }
}

// -------------------------------
// GRASP: CREATOR
// -------------------------------

class HelloWorldFactory {
  // Esta classe é responsável por "criar" tudo que o serviço necessita
  static createDefault() {
    const renderer = new ConsoleRenderer();   // objeto que o service usa
    const service = new HelloWorldService(renderer); // Creator monta tudo
    return service;
  }
}

// Uso simples e limpo
const service = HelloWorldFactory.createDefault();
service.sayHello("003");
