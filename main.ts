import { createElem } from './createElem.js'
import FrequencyTable from './FrequencyTable.js'
import Histogram from './Histogram.js'

const tableDiv = document.getElementById('table') as HTMLElement
const frequencyTable = new FrequencyTable('time','t','seconds')
frequencyTable.addRow()
frequencyTable.addRow()
frequencyTable.addRow()
tableDiv.append(frequencyTable.htmlElement)
const addRow = createElem('button',undefined,tableDiv)
addRow.innerHTML = 'Add row'
addRow.addEventListener('click', () => {
  frequencyTable.addRow()
})

const histogramDiv = document.getElementById('histogram') as HTMLElement
const histogram = new Histogram(frequencyTable,800,600)
histogramDiv.append(histogram.canvas)
histogram.render()

frequencyTable.htmlElement.addEventListener('change',()=>{histogram.render()})