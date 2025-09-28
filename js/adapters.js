class OldPrinter {
    printOld(text) {
        console.log(`[OLD PRINTER]: ${text}`);

        const printerOutput = document.getElementById('printerOutput');
        const timestamp = new Date().toLocaleTimeString();
        const ticketEntry = document.createElement('div');
        ticketEntry.innerHTML = `<div style="margin-bottom: 10px; padding: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 5px;">
            <div style="color: #ffa500;">[${timestamp}] PRINTER OUTPUT:</div>
            <div style="color: #e0e0e0; margin-top: 5px; white-space: pre-line;">${text}</div>
        </div>`;

        if (printerOutput.innerHTML.includes('No tickets printed yet')) {
            printerOutput.innerHTML = '';
        }

        printerOutput.appendChild(ticketEntry);
        printerOutput.scrollTop = printerOutput.scrollHeight;

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