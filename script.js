const express = require('express');
const cors = require('cors');
const app = express();
// Enable CORS for all routes
app.use(cors());
// Your route handling code here
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
var block_hash = "00000000000000000002cb1c80ef783f6445a4e6a5ae5bbcfa4ff1d693bc6985"
var api_url = "https://blockchain.info/rawblock/"+block_hash
const api_key = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkFQSSJ9.eyJhdWQiOiJtZXJjdXJ5IiwidWlkIjoiY2FiNmEyYTgtMmNkYi00NzExLWE4NTctNDhjNmQxYzEwZDQ2IiwiaXNzIjoiYmxvY2tjaGFpbiIsInJkbyI6dHJ1ZSwiaWF0IjoxNjkxNzM0NDkyLCJqdGkiOiIwYTYwM2ExNy1kZmUyLTQwYmEtOGMzYy00ZTUzYzYwZjMxOTgiLCJzZXEiOjY5NjkyNDQsIndkbCI6ZmFsc2V9.IP/IDFLiRx9jfhFtqr2AS20QyzZAqi7DjK6Xvobl9297AWtiC00zwTE2syaGB+sLwmD6ocdV4twjqPX7XbTa7TE="
headers = {"Authorization":"Bearer"+api_key}
fetch(api_url, {
    headers: headers
  })