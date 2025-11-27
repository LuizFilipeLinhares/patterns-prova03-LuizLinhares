// IMessageRenderer - contrato por convenção
class IMessageRenderer {
  render(message) {
    throw new Error("Método render() não implementado.");
  }
}

// Implementação padrão (Console)
class ConsoleRenderer extends IMessageRenderer {
  render(message) {
    console.log(message);
  }
}

// Novo comportamento sem alterar nada existente (Arquivo)
import fs from 'fs';
class FileRenderer extends IMessageRenderer {
  render(message) {
    fs.writeFileSync('log.txt', message + '\n', { flag: 'a' });
  }
}

// Serviço HelloWorld – FECHADO para modificação, ABERTO para extensão
class HelloWorldService {
  constructor(renderer) {
    this.renderer = renderer; 
  }

  sayHello(id) {
    const msg = `Hello, World! ${id}`;
    this.renderer.render(msg);
  }
}

// --- Uso ---
// modo console
const serviceConsole = new HelloWorldService(new ConsoleRenderer());
serviceConsole.sayHello("002");

// modo arquivo (SEM modificar a classe HelloWorldService)
const serviceFile = new HelloWorldService(new FileRenderer());
serviceFile.sayHello("002");
