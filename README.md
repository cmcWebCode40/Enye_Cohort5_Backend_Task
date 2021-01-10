# Enye_Cohort5_Backend_Task

### Tasks

1. Create an endpoint that accepts a `GET` request to `/api/rates`
2. The `/api/rates` endpoint must accept the following request query parameter strings
    1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
    2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
3. You can assume standard HTTP status codes on the response. If a request is unsuccessful, your application must properly handle it accordingly with the appropriate status codes
4. Upon a successful API response, transform the fetched payload into an object containing the following keys:
    1. **results**: JSON object containing the results from the API
    2. **base**: the requested home rate from the request URL query strings
    3. **date**: the current date 
    4. **rates**: An Object containing the requested currency in the request URL query strings
5. Your application server must be written with Node using an Express server ([https://expressjs.com/](https://expressjs.com/))
6. You **must** deploy your backend code
