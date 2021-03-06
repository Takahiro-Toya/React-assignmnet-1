/**
 * set response data into session storage
 * @param {*} prop 
 */
export default function HandleLogin(prop) {
    sessionStorage.setItem("token", prop.data.token);
    sessionStorage.setItem("token_type", prop.data.token_type);
    sessionStorage.setItem("expires", prop.data.expires);
    sessionStorage.setItem("loginStatus", "ON");
}

/**
 * remove saved response from storage
 */
export function HandleLogout() {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("toekn_type", "");
    sessionStorage.setItem("expires", "");
    sessionStorage.setItem("loginStatus", "OFF");
}