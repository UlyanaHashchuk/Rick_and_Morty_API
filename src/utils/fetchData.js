export const fetchData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonResp) => {
        if (!jsonResp.error) {
          return resolve(jsonResp)
        }
        return reject()
      })
      .catch((error) => reject(error))
  })
