'use strict'
// need to require templates

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log(data)
}

const signOutFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
