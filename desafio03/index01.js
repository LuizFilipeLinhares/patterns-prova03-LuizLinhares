// simpleFormatter.js
class SimpleFormatter {
  format(message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${message}`;
  }
}

// consoleWriter.js
class ConsoleWriter {
  write(formatted) {
    console.log(formatted);
  }
}

// helloWorldService.js
class HelloWorldService {
  constructor(formatter, writer) {
    this.formatter = formatter; // espera algo com .format()
    this.writer = writer;       // espera algo com .write()
  }

  sayHello(id) {
    const raw = `Hello, World! ${id}`;
    const formatted = this.formatter.format(raw);
    this.writer.write(formatted);
  }
}

// main.js
const formatter = new SimpleFormatter();
const writer = new ConsoleWriter();
const service = new HelloWorldService(formatter, writer);

service.sayHello('001'); // => exibe uma linha formatada no console
