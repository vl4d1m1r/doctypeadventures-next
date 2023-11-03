export default function Google() {
    return (
        <>
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-96269842-3"
            ></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-96269842-3');
            </script>
        </>
    )
}