const url = 'https://eg-cdn.s3.eu-central-1.amazonaws.com/static/fe-test/seminars-test-data.json'

export default {
    create: () => {
        window['getJSON'] = () => fetch(url,{method: 'GET'}).then(response => response.json())
    }
}