
function coerce(obj) {
  if(Array.isArray(obj)) {
    return obj.map(function(value) {
      return coerce(value)
    }.bind(this))
  }

  if(obj instanceof String || typeof obj == 'string') {
    if(obj == 'false') {
      return false
    }

    if(obj == 'true') {
      return true
    }

    if(isFinite(obj)) {
      return parseFloat(obj)
    }

    return obj
  }

  if(obj === true || obj === false) {
    return obj
  }

  for(var key in obj) {
    obj[key] = coerce(obj[key])
  }

  return obj
}

module.exports = coerce
