const useApiCall = (url) => {
  fetch(url).then((data) => {
    if (data.ok) {
      return data.json();
    }
  }).catch(err => {
    throw err;
  });
}

export default useApiCall;
