async function getWeather(lat, lon) {
    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const params1 = `lat=${lat}&lon=${lon}&units=metric`;
    const params2 = `appid=${openWeaterKey}&lang=kr`;
    const weatherUrl = `${weatherBaseUrl}?${params1}&${params2}`;

    let response = await fetch(weatherUrl);
    let result = await response.json();
    // console.log(result);
    const desc = result.weather[0].description;
    const iconCode = result.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    const temp = parseFloat(result.main.temp).toFixed(1);
    // console.log({desc, iconUrl, temp});
    return {desc, iconUrl, temp};
}

async function getCoord(place) {
    try {
        const roadBaseUrl = 'https://business.juso.go.kr/addrlink/addrLinkApi.do';
        const kakaoBaseUrl = 'https://dapi.kakao.com/v2/local/search/address.json';
        const params1 = 'currentPage=1&countPerPage=5';
        const params2 = `keyword=${encodeURIComponent(place)}`;
        const params3 = `confmKey=${roadAddrKey}&resultType=json`;
        const roadUrl = `${roadBaseUrl}?${params1}&${params2}&${params3}`;

        let response = await fetch(roadUrl);
        let result = await response.json();
        let roadAddr = result.results.juso[0].roadAddr;

        let kakaoUrl = `${kakaoBaseUrl}?query=${encodeURIComponent(roadAddr)}`;
        let header = { Authorization: `KakaoAK ${kakaoRestKey}` };   
        response = await fetch(kakaoUrl, { headers: header });
        result = await response.json();
        let lat = parseFloat(result.documents[0].y);
        let lon = parseFloat(result.documents[0].x);
        return {place, roadAddr, lat, lon};
    } catch(error) {
        console.log(error);
        return {place, roadAddr:null, lat:null, lon:null};
    }
}

