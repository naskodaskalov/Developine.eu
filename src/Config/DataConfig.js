const baseUrl = 'https://stocknewsapi.com/api/v1/'
const token = 'byy6uykc20b8opbe00jrj0uf1mww9i9jbeqiupmf'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

class Data {
  static get (url) {
    let options = getOptions()
    options.method = 'GET'

    return window.fetch(`${baseUrl}${url}&token=${token}`, options)
      .then(handleJsonResponse)
  }
}

export default Data
