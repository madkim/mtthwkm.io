import axiosInstance from '../_helpers/axios-config'

export function sendContactEmail(name, email, details) {
  return axiosInstance.post('https://0lvqdvjg9a.execute-api.us-east-1.amazonaws.com/prod/contact', {
    email: email,
    subject: name,
    message: details
  })
}

