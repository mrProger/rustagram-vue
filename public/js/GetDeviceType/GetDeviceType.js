function getDeviceType() {
    let agent = window.navigator.userAgent;

    return agent;
}

function isPC() {
    let agent = window.navigator.userAgent;

    return agent.indexOf('Windows') != -1 || agent.indexOf('Macintosh') != -1 || agent.indexOf('Linux x86') != -1;
}

function isAndroid() {
    let agent = window.navigator.userAgent;

    return agent.indexOf('Android') != -1;
}

function isIOS() {
    let agent = window.navigator.userAgent;

    return agent.indexOf('iPhone') != -1 || agent.indexOf('iPad') != -1;
}