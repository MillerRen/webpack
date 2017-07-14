import axios from 'axios'
import Mock from 'axios-mock-adapter'
import mockAccount from './resources/account'

var mock = new Mock(axios, { delayResponse: 20 })

mockAccount(mock)

export default mock
