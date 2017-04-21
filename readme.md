# Mobx Form Label

## Install
```
$ npm install --save mobx-form-label
or
$ yarn add mobx-form-label
```

## Usage

in your model file (./src/models/user.js):
```
import { observable } from 'mobx'
import label from 'mobx-form-label'

class UserModel {
  @observable
  @label('Username', 'Please give your username:')
  username = '';

  @observable
  @label('Password', 'Input Password')
  password = '';
}

export default UserModel
```

in your custom input (./src/custom-input.js)
```
import React from 'react'

class CustomInput extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func
  }
  render() {
    return (
      <div>
        <span>{this.props.label}</span>
        <input placeholder={this.props.placeholder} onChange={this.props.onChange} />
      </div>
    )
  }
}
```

in your form file (./src/forms/userLoginForm.js): 
```
import React from 'react'
import Input from '../custom-input'
import UserModel from '../models/user'

class UserLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.user = new UserModel()
  }

  onChange(key, e) {
    // ...custom input value
  }

  render() {
    return (
      <Input label={this.user.usernameLabel} placeholder={this.user.usernamePlaceholder} onChange={this.onFormChange.bind(this, 'username')} />
    )
  }
}
```
will display label for your input components and give placeholder to your input components

## License
MIT © [mot99]

