/**
 * Creates a new HTML element, sets classes and appends
 * @param {string} tagName Tag name of element
 * @param {string|undefined} [className] A class or classes to assign to the element
 * @param {HTMLElement} [parent] A parent element to append the element to
 * @returns {HTMLElement}
 */
export function createElem(tagName: string, className: string | undefined, parent?: HTMLElement): HTMLElement {
  // create, set class and append in one
  const elem = document.createElement(tagName);
  if (className)
    elem.className = className;
  if (parent)
    parent.appendChild(elem);
  return elem;
}

type inputType = "button"|
                  "checkbox"|
                  "color"|
                  "date"|
                  "datetime-local"|
                  "email"|
                  "file"|
                  "hidden"|
                  "image"|
                  "month"|
                  "number"|
                  "password"|
                  "radio"|
                  "range"|
                  "reset"|
                  "search"|
                  "submit"|
                  "tel"|
                  "text"|
                  "time"|
                  "url"|
                  "week"

export function createInput (type: inputType, value: string, parent?: HTMLElement, className?: string, checked?: boolean) : HTMLInputElement{
  const elem = document.createElement('input')
  elem.type = type
  elem.value = value
  if (className) elem.className = className
  if (parent) parent.appendChild(elem)
  if (checked !== undefined) elem.checked = checked
  return elem
}