export default httpClient => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    httpClient.interceptors.response.use(
      response => response,
      error => {
        const canThrowAnError = (error.request.status =
          0 || error.request.status === 500)

        if (canThrowAnError) {
          throw new Error(error.mesage)
        }

        return error
      }
    )

    return {
      data: response.data,
      errors
    }
  }
})
