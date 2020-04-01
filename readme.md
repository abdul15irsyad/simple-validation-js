# simple-validation-js

Simple javascript validation library

## Installation

use `npm` to install

```bash
npm install simple-validation-js
```

## Usage

```javascript
let validate = require('simple-validation-js')

let config = {
  rules: {
    username: {
      required: true,
      min: 8
    }
  },
  data: {
    username: 'test'
  },
  messages: {
    username: {
      required: 'username is required',
      min: 'username must be at least 8 characters long'
    }
  }
}

let result = validate(config)
if(result.errors){
  console.log(result.errors)
}else{
  console.log(result)
}
/* if validate is false will return in result.errors
{
  username: {
    required: {
      status: false,
      message: // will show default if u didnt input messages in config
   }
 }
}*/
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.