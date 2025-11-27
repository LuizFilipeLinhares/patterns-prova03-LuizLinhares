////IMPLEMENTANDO O ISR


class SimpleFormatter {
  format(message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${message}`;
  }
}


class ConsoleWriter {
  write(formatted) {
    console.log(formatted);
  }
}


class HelloWorldService {
  constructor(formatter, writer) {
    this.formatter = formatter;
    this.writer = writer;       
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
