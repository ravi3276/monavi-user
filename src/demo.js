const axios = require('axios');


axios.get('https://www.nasdaq.com/market-activity/quotes/nasdaq-ndx-index')
.then((response) => console.log(response))