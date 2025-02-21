


export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJnb2p1b24tcHJvZCIsInNjb3BlIjpbIndyaXRlOmRhdGEiXSwiZXhwIjoxNzcxNjI2NjA1LCJpYXQiOjE3NDAwOTA2MDV9.iIhzivVKba7r53JJEXfO1Dr-C_cmYC3ZGQ-n_JatnC0'
export const API_URL = 'https://uel9kvx7li.execute-api.us-east-1.amazonaws.com/api/v1/metrics'
interface MetricEvent {
    uid: string;
    data: {
        [key: string]: any;
    };
}

export const addMetric = (data: {
    [key: string]: any;
}) => {
    data['timestamp'] = new Date().toISOString();
    data['event'] = 'gojuon-prod-metric';
    const eventData: MetricEvent = {
        data,
        uid: 'gojuon-prod'
    }
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Bearer " + TOKEN
        },
        body: JSON.stringify(eventData)
    }).finally(() => {});

}