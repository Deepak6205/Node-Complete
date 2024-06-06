const express = require('express');
const app = express();

app.post('/items', (req,res)=>{
    res.send("data is saved")
})
app.get('/', function (req, res) {
  res.send('Welcome Baby Lets start this shit...');
});
app.get('/chicken',(req,res) => {
    res.send('sure baby we will fuck it..lets do this shit');
});
app.get('/idli', (req,res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10cm dia wala',
        is_sambhar: true,
        is_coconut_chatni: false
    }
    res.send(customized_idli);
});

app.listen(3000, () => {
    console.log('listening to the server');
});