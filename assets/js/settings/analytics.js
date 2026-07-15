let analyticsDisabled = JSON.parse(localStorage.getItem('analyticsDisabled'));

if (analyticsDisabled === null) {
    analyticsDisabled = false;
}

const analyticsToggle = document.getElementById('analyticsToggle');

analyticsToggle.value = analyticsDisabled ? "off" : "on";

if (!analyticsDisabled) {
    enableAnalytics();
}

analyticsToggle.addEventListener('change', function () {
    analyticsDisabled = this.value === "off";

    localStorage.setItem('analyticsDisabled', JSON.stringify(analyticsDisabled));

    if (analyticsDisabled) {
        disableAnalytics();
    } else {
        enableAnalytics();
    }
});


function enableAnalytics() {
    if (document.querySelector('script[data-analytics]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-J0V0W80N7G";
    script.dataset.analytics = "true";

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-J0V0W80N7G');
}


function disableAnalytics() {
    const script = document.querySelector('script[data-analytics]');

    if (script) {
        script.remove();
    }

    window['ga-disable-G-J0V0W80N7G'] = true;
}
