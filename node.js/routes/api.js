var express = require('express');
var router = express.Router();

/* GET home page. */
// /api

const data = [
    {
        id: 1,
        title: 'good'
    }
]
router.get('/products', function (req, res, next) {
    //自訂狀態
    // res.status(400);
    res.send({
        success:true,
        data
    });
    res.end();
});

router.post('/products', function(req, res, next){
    const product = req.body;
    
    //物件也能用展開跟其餘
   data.push({
       ...product,
       id: new Date().getTime()
   })

   res.send({
       success:true,
       data
   })
   res.end();
});

//指定id 用:id
router.delete('/products/:id', function(req, res, next){
    const id = req.params.id;

    data.forEach((item, key)=>{
        //型別不同 需要轉算  id是數字 但傳回來的 是string
        if(item.id == id){
            //當前這個商品
            data.splice(key, 1);
        }
    })
    res.send({
        success:true,
        data
    });
    res.end();
});

module.exports = router;
