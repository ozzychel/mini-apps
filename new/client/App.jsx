class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabCount: 0,
      checkoutButtonVisible: true,
      nameField: "",
      emailField:"",
      passwordField:""
    }
  }

  componentDidMount(){
  }

  checkoutOnClickHandler () {
    var newNum = this.state.tabCount + 1;
    this.setState({
      tabCount: newNum,
      checkoutButtonVisible: false
    })
  }

  handleNameChange (value) {this.setState({ nameField: value })}
  getNameState () {return this.state.nameField}

  handleEmailChange (value) {this.setState({ emailField: value })}
  getEmailState () {return this.state.emailField}

  handlePasswordChange (value) {this.setState({ passwordField: value })}
  getPasswordState () {return this.state.passwordField}

  submitPersonalData () {
    if(this.state.nameField.length !== 0 || this.state.emailField.length !==0 ||
    this.state.passwordField.length !==0) {
      var newObj = {
        name: this.state.nameField,
        email: this.state.emailField,
        password: this.state.passwordField}
      this.postPersonalData(newObj, (err, result)=>{
        if (err) {
          console.log('POST ERROR')
          console.log(err)
        } else {
          console.log('ITEM POSTED')
          console.log(result)
        }
      })
    }
  }

  postPersonalData (newObj, callback) {
    $.ajax({
      url:'http://localhost:3000/api/users',
      method:'POST',
      data: newObj,
      success: (data) => {
        callback(null, data)
      },
      error: (err) => {
        callback(err, null)
      }
    })
  }

  tabReturn () {
    if(this.state.tabCount === 0) {
        return <h1></h1>
    } else if (this.state.tabCount === 1) {
        return <PersonalData
        checkoutOnClickHandler={this.checkoutOnClickHandler.bind(this)}
        handleNameChange={this.handleNameChange.bind(this)}
        getNameState={this.getNameState.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        getEmailState={this.getEmailState.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        getPasswordState={this.getPasswordState.bind(this)}
        submitPersonalData={this.submitPersonalData.bind(this)}
        />
    } else if(this.state.tabCount === 2) {
        return <Address
        checkoutOnClickHandler={this.checkoutOnClickHandler.bind(this)}
        />
    } else if(this.state.tabCount === 3) {
        return <Payment
        checkoutOnClickHandler={this.checkoutOnClickHandler.bind(this)}
        />
    } else {
        return <Summary />
    }
  }

  render () {
    return (
      <div>
        <button type='button'
        className={this.state.checkoutButtonVisible ? 'checkout-btn-vis' : 'checkout-btn-none'}
        onClick={this.checkoutOnClickHandler.bind(this)}
        >Checkout</button>
        {this.tabReturn()}
      </div>
    )
  }
}

var PersonalData = ({
  checkoutOnClickHandler, handleNameChange, getNameState, getEmailState, handleEmailChange, getPasswordState, handlePasswordChange, submitPersonalData
}) => (
  <div>
    <h1>Personal</h1>
    <form>
      <label>Full Name
        <input type="text" placeholder='Type here...' value={getNameState()}
        onChange={()=>{handleNameChange(event.target.value)}}></input>
      </label>
    </form>
    <form>
      <label>Email
        <input type="text" placeholder='Type here...' value={getEmailState()}
        onChange={()=>{handleEmailChange(event.target.value)}}></input>
      </label>
    </form>
    <form>
      <label>Password
        <input type="text" placeholder='Type here...' value={getPasswordState()}
        onChange={()=>{handlePasswordChange(event.target.value)}}></input>
      </label>
    </form>
    <button type='button' onClick={

      ()=>{
        checkoutOnClickHandler()
        submitPersonalData()
      }

      }>Next</button>
  </div>
)

var Address = ({checkoutOnClickHandler}) => (
  <div>
    <h1>Address</h1>
    <button type='button' onClick={
      checkoutOnClickHandler
      }>Next</button>
  </div>
)

var Payment = ({checkoutOnClickHandler}) => (
  <div>
    <h1>Payment</h1>
    <button type='button' onClick={
      checkoutOnClickHandler
      }>Next</button>
  </div>
)

var Summary = () => (
  <div>
    <h1>Summary</h1>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

