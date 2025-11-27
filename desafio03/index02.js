//Implementando o LSP


class Writer {
  write(message) {
    throw new Error("Método write() precisa ser implementado.");
  }
}

class ConsoleWriter extends Writer {
  write(message) {
    console.log("ConsoleWriter =>", message);
  }
}

class FileWriter extends Writer {
  write(message) {
    console.log("FileWriter (simulado) =>", message);
  }
}

function sendMessage(writer, message) {
  writer.write(message);
}

// ------ Testando o LSP ------

const consoleWriter = new ConsoleWriter();
const fileWriter = new FileWriter();

sendMessage(consoleWriter, "Hello, World! 002"); 
sendMessage(fileWriter, "Hello, arquivo! 002"); 
