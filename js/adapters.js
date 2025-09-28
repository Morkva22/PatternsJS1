class OldPrinter {
    printOld(text) {
        console.log(`[OLD PRINTER]: ${text}`);
        return `[OLD PRINTER]: ${text}`;
    }
}

class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(text) {
        return this.oldPrinter.printOld(text);
    }
}