export let APIURL = '';

switch (window.location.hostname) {
  case 'https://nexus-client.herokuapp.com/' :
    APIURL = 'https://nexuserver.herokuapp.com/'
    break;
  default:
    APIURL = 'http://localhost:4200'
}

