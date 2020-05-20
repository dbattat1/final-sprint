import httpService from './httpService';

export default {
    query,   
}

function query() {
    console.log('hello from cityService');
    return httpService.get('city')
}
