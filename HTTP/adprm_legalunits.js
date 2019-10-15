const http = require('http');

const options = {
    hostname : 'uat.lifion.oneadp.com',
    path : '/api/web-api/v0/adprm/legalunits',
    method : 'GET',
    headers : {
        associateoid : 'G3XKNGNB5RBNVYHK',
        orgoid : 'G3PQ7C5H9HN84G61'
    }
}

http.get(options,(res)=>{
    res.on('data',(chunk)=>{
        console.log(chunk)
    })
    res.on('end',()=>{
        console.log("End of the response...");
    })
}).on('error',(e)=>{
    console.error(e);
})