!function(e){"use strict";var o=e.querySelector("#app"),t="Kinderpharma Orders";o.appContextTitle=t,o.showToast=function(e){o.$.toast.text=e,o.$.toast.show()},o.getProductTypeById=function(e){console.warn("Find Product type by id: "+e)},o.authenticate=function(e,t){console.debug("Authenticate with user:"+e),o.$.authService.authenticate(e,t)},o.getAuthToken=function(){return o.$.authService.getAuthToken()},o.getAuthTokenData=function(){return o.$.authService.getAuthTokenData()},o.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},o.onMenuSelect=function(){var o=e.querySelector("#paperDrawerPanel");o.narrow&&o.closeDrawer()},o.validateUserLogin=function(){console.debug("[AUTH] Validating user login:");var e=o.getAuthTokenData();if(null!==e){var t=Date.parse(e.expiration),n=Date.now();console.debug("[AUTH - test] Expiration date in millis: "+t+" / current date in millis: "+n);var r=n-t;console.debug("[AUTH - test] diff in millis: "+r),r>=0&&(console.warn("User token has expired."),console.debug("*************  ESTA ES UNA PRUEBA. REFRESCANDO TOKEN POR QUE EXPIRO  ***************"),console.debug("*************  !!!!evaluar donde y como corresponde esta accion!!!!  ***************"),o.$.authService.refreshToken()),o.printUserAuthData(e)}else console.debug("*************  EL USUARIO NO ESTA AUTENTICADO  ***************"),console.debug("*************  !!!!evaluar donde y como corresponde esta accion!!!!  ***************")},o.printUserAuthData=function(e){console.debug("[AUTH] Token: "+e.value),console.debug("[AUTH] Expiration: "+e.expiration),console.debug("[AUTH] TokenType: "+e.tokenType),console.debug("[AUTH] RefreshToken: "+e.refreshToken.value),console.debug("[AUTH] Expiration: "+e.refreshToken.expiration)},o.getUserById=function(e){console.log("[ENTERING] - getUserById...");for(var t=0;t<o.users.length;t++)if(o.users[t].id===e)return o.users[t];console.log("[LEAVING] - getUserById...")},o.updateUserList=function(e){for(var t=0;t<o.users.length;t++)if(o.users[t].id===e.id)return o.users[t]=e,void(o.users=o.users.splice(0));o.users.push(e),o.users=o.users.splice(0)},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){o.validateUserLogin(),console.warn("WebComponentsReady"),o.$.userService.getAll("079d11ff-c344-4c35-89f6-22a045c5bcc8"),o.$.roleService.getAll(),o.$.productTypeService.getAll("c2ed7ed5-8fd7-4097-9b20-8daff7b3ea79")}),o.addEventListener("on-toast",function(e){var t=e.detail.message;o.showToast(t)})}(document);