let allRules = {
  required: (data) => {
    return data!=undefined&&data!=''
  },
  min: (data,minLength) => {
    return data.length>=minLength
  },
  max: (data,maxLength) => {
    return data.length<=maxLength
  }
}

let validate = ({rules,data,messages={}}) => {
  let result = {}
  for(let idxRules in rules){
    let attribute = idxRules
    result[attribute] = {}
    for(let idxRule in rules[idxRules]){
      switch(idxRule){
        case 'required':
          result[attribute].required = {}
          result[attribute].required.status = allRules.required(data[attribute])
          if(result[attribute].required.status){
            delete result[attribute].required
          }else{
            result[attribute].required.message = messages.hasOwnProperty(attribute)&&messages[attribute].hasOwnProperty(idxRule) ? messages[attribute][idxRule] : `${attribute} is required` 
          }
          break
        case 'min':
          result[attribute].min = {}
          result[attribute].min.status = allRules.min(data[attribute],rules[idxRules][idxRule])
          if(result[attribute].min.status){
            delete result[attribute].min
          }else{
            result[attribute].min.message = messages.hasOwnProperty(attribute)&&messages[attribute].hasOwnProperty(idxRule) ? messages[attribute][idxRule] : `${attribute} min 3` 
          }
          break
        default:
          return {
            status: false,
            message: `error validate, there is no '${idxRule}' validation`
          }
      }
    }
    if(Object.keys(result[attribute]).length==0){
      delete result[attribute]
    }
  }
  return Object.keys(result).length>0 ? {
    errors: result
  } : true
}

module.exports = validate