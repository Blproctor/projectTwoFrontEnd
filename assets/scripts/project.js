'use strict'
const container = $('.container')
// const portalLogin = $('.forms')

// container.hide()
// portalLogin.hide()

// const doctor = data.doctor
// console.log(data.doctor)
// const doctor = data.doctor
// console.log(data.doctor)

const createPostButton = $('.btn')

function checkForAdmin (doctor) {
  if (doctor) {
    return true
  } else {
    return false
  }
}

$('#create-post').click(function (doctor) {
  if (!checkForAdmin) {
    createPostButton.hide()
  }
})
