let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled'));

if (areAdsDisabled === null) {
    areAdsDisabled = false;
}

const adsToggle = document.getElementById('adsToggle');

if (!areAdsDisabled) {
    enableAds();
}

adsToggle.value = areAdsDisabled ? "off" : "on";

adsToggle.addEventListener('change', function () {
    areAdsDisabled = this.value === "off";

    localStorage.setItem('adsDisabled', JSON.stringify(areAdsDisabled));

    if (areAdsDisabled) {
        disableAds();
    } else {
        enableAds();
    }
});

function enableAds() {
    if (document.querySelector('script[data-ad-script]')) return;

    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = '//pl26109231.effectivecpmnetwork.com/f3/70/9b/f3709b7dd09eb147485a2b038066c5a3.js';
    adScript.async = true;
    adScript.dataset.adScript = "true";

    document.body.appendChild(adScript);
}

function disableAds() {
    const adScript = document.querySelector('script[data-ad-script]');

    if (adScript) {
        adScript.remove();
    }
}
