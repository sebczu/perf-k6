import http from 'k6/http'
import {check} from 'k6'
import {
  getRQ
} from './utils/helpers.js'

export let options = {
  setupTimeout: '1m'
};

export function setup() {
  console.log("setup");
}

export default function () {
  const response = getRQ(http);
  console.log(`response status: ${response.status}, body: ${response.body}`);
}
