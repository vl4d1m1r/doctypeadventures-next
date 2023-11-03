const facebookSDK = `
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0&appId=958449331300080" nonce="WS7J9PWf">
  </script>
`;

export default function FacebookIntegration() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: facebookSDK }}></div>
    </>
  );
}
