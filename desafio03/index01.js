// ISP - Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar. 

// Esse princípio basicamente diz que é melhor criar 
// interfaces mais específicas ao invés de termos uma única interface genérica.


class Printer {
  print(doc) {}
}

class Scanner {
  scan(doc) {}
}

class Fax {
  faxes(doc) {}
}


class SimplePrinter extends Printer {
  print(doc) {
    console.log("Imprimindo:", doc);
  }
}

class MultiFunctionPrinter {
  constructor(printer, scanner, fax) {
    this.printer = printer;
    this.scanner = scanner;
    this.faxes = fax;
  }

  print(doc) {
    this.printer.print(doc);
  }

  scan(doc) {
    this.scanner.scan(doc);
  }

  fax(doc) {
    this.faxes.fax(doc);
  }
}


class BasicPrinter extends Printer {
  print(doc) {
    console.log("🖨️ Imprimindo:", doc);
  }
}

class BasicScanner extends Scanner {
  scan(doc) {
    console.log("📄 Digitalizando:", doc);
  }
}

class BasicFax extends Fax {
  fax(doc) {
    console.log("📠 Enviando fax:", doc);
  }
}


const printer = new BasicPrinter();
const scanner = new BasicScanner();
const fax = new BasicFax();

const multi = new MultiFunctionPrinter(printer, scanner, fax);
multi.print("Contrato.pdf");
multi.scan("Relatório.pdf");
multi.fax("Assinatura.png");