// declare global {
//   interface Window { currentUserProfile: any; }
// }

// window.currentUserProfile = window.currentUserProfile || {};

export async function getUserInfo() {
  // if (window.currentUserProfile) {
  //   return window.currentUserProfile;
  // } else {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      //window.currentUserProfile = payload;
      console.log('clientPrincipal');
      console.log(clientPrincipal);
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  //}
}

export async function isUserSignedIn() {
  // if (window.location.href.toLowerCase().indexOf('localhost')) {
  //   return true;
  // }
  const userInfo = await getUserInfo();
  if (userInfo && userInfo.userDetails) { 
    return true;
   }
  return false;
}