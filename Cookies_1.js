Cookies are small text files created by websites you visit, which store information about your visit 
to make your online experience easier support.google.com. They are used to manage user sessions, 
  store personalization preferences, and track user behavior developer.chrome.com. Cookies can be either first-party cookies
(created by the site you visit) or third-party cookies (created by other sites, 
such as ads or images embedded in the site you visit) support.google.com.

To work with cookies in JavaScript, you can use the document.cookie property. Here are some basic operations:

Get a cookie: To read the value of a cookie, you can use document.cookie, which returns a string containing all cookies in the format "key1=value1; key2=value2; ...". You can then parse this string to get the cookie value you need javascripttutorial.net.
Set a cookie: To create or update a cookie, you can assign a string to document.cookie in the format "key=value; expires=date; path=path". The expires attribute determines the cookie's expiration date, and the path attribute sets the cookie's scope javascripttutorial.net.
Delete a cookie: To delete a cookie, you can set its expires attribute to a date in the past javascripttutorial.net.
To see the cookies on your website, you can use browser developer tools, such as Chrome DevTools or Microsoft Edge DevTools developer.chrome.com, learn.microsoft.com.

Cookies have both benefits and drawbacks. They can remember user preferences and settings, improving the user experience. 
ever, they can also track users' online behavior, raising privacy concerns blog.logrocket.com. 
You can manage cookies in your browser's settings, where you can choose to delete existing cookies, 
allow or block all cookies, and set preferences for certain websites support.google.com, support.google.com.








1.SETTIING COOKIES



function setCookie(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive*24*60*60*1000))
    let expires = "expires"+ date.toUTCString();
    document.cookie = `${name} = ${value}; expires=${expires} ; path=/`

}

setCookie("ema","ken@gmail.com",5)




2.GETTING ALL COOKIES COOKES


function display(){
    var allCookies = document.cookie;
    var cookies = allCookies.split('; ');
    for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split('=');
    var names = cookie[0];
    var value = cookie[1];
    console.log(names + ': ' + value);
    }


}


display()



3.GET A SPECIFIC COOKIE

function getCookie(name){
    const cDecode = decodeURIComponent(document.cookie);
    console.log(cDecode)
    cArray = cDecode.split("; ")
    console.log(cArray)
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name)==0){
            result = element
        }
        
    });

    return result


}

console.log(getCookie("email"))





4.DELETE A COOOKIE

1. Set the Expiration date of that cookie to a past date
function dEleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}



2. Set The epration date of that cookie to null
function deleteCookie(name){
    setCookie(name,null,null)

}













USES OF KEYS
***************************************************************************




Cookies are used for various purposes, such as session management, personalization, and tracking user behavior across websites.
Here are some examples of how cookies are used for these purposes:


Session management:

Cookies store data related to user interactions with a website, such as logins and shopping cart items.
They help maintain user session states, so users dont have to continually log in or lose items in their cart due to 
accidental page shutdowns. This makes web browsing more convenient by saving users time on repetitive actions oxylabs.io.
  // Set a session cookie with a unique identifier
  setCookie('sessionID', 'unique_session_id', 1);


Personalization:

Cookies store user preferences and settings, such as language, browser type, and location.
This allows websites to adapt their content for a smoother user experience oxylabs.io.
  // Set a cookie to remember the user's language preference
  setCookie('language', 'en', 30);



Tracking user behavior:

Cookies help websites adapt their content based on user interests.
For example, news portals can classify content according to users preferences. 
Third-party cookies are often used for advertising, tailoring ads based on browsing history oxylabs.io.
  // Set a cookie to track user interests
  setCookie('interests', 'sports,technology', 365);

To manage cookies in JavaScript, you can use the getCookie, setCookie, and deleteCookie functions provided in the previous answer. 
These functions allow you to read, create, update, and delete cookies, respectively.

Keep in mind that cookies can raise privacy concerns, as they can track users online behavior. 
Users can manage cookies in their browser settings,
choosing to delete existing cookies, allow or block all cookies, or set preferences for specific websites cloudflare.com.











































