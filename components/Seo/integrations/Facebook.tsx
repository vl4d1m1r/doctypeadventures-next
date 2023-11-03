export default function Google() {
    return (
    <>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0" nonce="wOu7XNnP"></script>
        <div id="root"></div>
        <script>
        window.fbAsyncInit = function() {
        FB.init({
        appId            : '958449331300080',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v10.0'
        });
        FB.AppEvents.logPageView();
        };
        
        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        </script>
    </>
    )
}