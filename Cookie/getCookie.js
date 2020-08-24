/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}