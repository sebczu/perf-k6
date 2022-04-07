const RQ_HOST = __ENV.RQ_HOST
const RQ_PATH = __ENV.RQ_PATH

const getRQ = (http) => {
  console.log(`host: ${RQ_HOST}, path: ${RQ_PATH}`);
  return http.get(`http://${RQ_HOST}${RQ_PATH}`);
}

export {
  getRQ
}
