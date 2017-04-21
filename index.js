const camelCase = require('easy-camelcase')

function definedLabelComputed(target, attr, value) {
  Object.defineProperty(target, attr, {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  })
}

function label(labelString, placeholder) {
  return function (target, attr) {
    const labelAttr = camelCase(attr+'-label')
    definedLabelComputed(target, labelAttr, labelString)

    const placeholderAttr = camelCase(attr+'-placeholder')
    definedLabelComputed(target, placeholderAttr, placeholder)
  }
}

module.exports = label

