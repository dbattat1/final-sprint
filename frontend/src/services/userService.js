import httpService from './httpService'

export default {
    login,
    logout,
    signup
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    // return _handleLogin(user)
}
async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    // return _handleLogin(user)
}
async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}
// function _handleLogin(user) {
//     sessionStorage.setItem('user', JSON.stringify(user))
//     return user;
// }