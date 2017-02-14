class Auth {
 static loggedIn() {
   return !!sessionStorage.jwt;
 }
}

export default Auth;
