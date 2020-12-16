import { createElem, createInput } from "./createElem.js";
import Row from "./Row.js";
export default class FrequencyTable {
    constructor(varName, varSymbol, unit) {
        this.rows = [];
        this.varName = varName;
        this._varSymbol = varSymbol;
        this.unit = unit;
    }
    addRow() {
        if (this.rows.length === 0) {
            this.addFirstRow();
        }
        else {
            const lowerBound = this.rows[this.rows.length - 1].upperBound;
            const upperBound = lowerBound + 10;
            const row = new Row(lowerBound, upperBound, 1, this.varSymbol, false);
            this.rows[this.rows.length - 1].nextRow = row;
            this.rows.push(row);
            if (this._htmlElement) {
                this._htmlElement.append(row.htmlElement);
            }
        }
    }
    addFirstRow() {
        const lowerBound = 0;
        const upperBound = 10;
        const row = new Row(lowerBound, upperBound, 1, this.varSymbol, true);
        this.rows.push(row);
        if (this._htmlElement) {
            this._htmlElement.append(row.htmlElement);
        }
    }
    get varSymbol() {
        return this._varSymbol;
    }
    set varSymbol(varSymbol) {
        this._varSymbol = varSymbol;
        this.rows.forEach(row => {
            row.varSymbol = varSymbol;
        });
    }
    get htmlElement() {
        if (!this._htmlElement)
            this.generateHTML();
        if (!this._htmlElement)
            throw new Error('Generating HTML element failed');
        return this._htmlElement;
    }
    generateHTML() {
        const table = createElem('table', 'frequency-table');
        const headerRow = createElem('tr', undefined, table);
        const classTitle = createElem('th', undefined, headerRow);
        const varNameInput = createInput('text', this.varName, classTitle, 'variable-name');
        varNameInput.addEventListener('change', () => {
            this.varName = varNameInput.value;
        });
        classTitle.append(' (');
        const varSymbolInput = createInput('text', this.varSymbol, classTitle, 'variable-symbol');
        varSymbolInput.addEventListener('change', () => {
            this.varSymbol = varSymbolInput.value;
        });
        classTitle.append(' ');
        const unitInput = createInput('text', this.unit, classTitle, 'unit');
        unitInput.addEventListener('change', () => {
            this.unit = unitInput.value;
        });
        classTitle.append(')');
        createElem('th', undefined, headerRow).innerHTML = 'Frequency';
        createElem('th', undefined, headerRow).innerHTML = 'Frequency Density';
        createElem('th', undefined, headerRow).innerHTML = 'Show bar';
        this.rows.forEach(row => {
            table.append(row.htmlElement);
        });
        this._htmlElement = table;
    }
}
