'use strict'

// url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
// url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
// url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',

const signUp = (data) => {
  return $.ajax({
    url: 'http://localhost:4741/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  console.log(data)
  return $.ajax({
    url: 'http://localhost:4741/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  console.log(data)
  return $.ajax({
    url: 'http://localhost:4741/change-password',
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.password,
        'new': data.credentials.new,
        'new_confirmation': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: 'http://localhost:4741/sign-out',
    method: 'DELETE',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
