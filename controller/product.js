
const fs = require('fs');

function get(req, res) {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}

exports.update = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        console.log('hello');
        console.log(req.body);
        let newP = req.body;
        console.log(newP.name);
        console.log("img",newP.image);
        let products = JSON.parse(data);
        console.log(newP.description);
        
         for (let i = 0; i < products.length; i++) {
           if(products[i].id==newP.id){
            products[i].name=newP.name;
            products[i].price=newP.price;
            products[i].image=newP.image;
            products[i].description=newP.description;
            console.log(products[i].id);

           }
           
            
         }
       
        fs.writeFile("products.json", JSON.stringify(products), (err) => {   
            if (err) {
                res.send("error  in add products ");
            } else {
              
                res.send(products);

            }
        })
})
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let product = data.find(st => st.id == id)

            if (product == undefined) {
                res.status(500).send("not found student by tz " + id);
            } else {
                res.send(product);
            }

        }


    })
}


exports.post = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let products = JSON.parse(data);
        let obj=req.body;
        //body =  לתוכן שנשלח בפונקציה פןסט 
        obj.id=products[products.length-1].id+1
        products.push(obj);
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send("sucess add");
            }
        })
    })
}

exports.delete=(req,res) =>{
   
    fs.readFile("products.json", "utf-8", (err, data) => {
        let id = req.params.id; 
        console.log(id)
        data = JSON.parse(data);
        let product = data.find(st => st.id == id)

        if (product == undefined) {
            res.status(500).send("not found product by tz " + id);
        } else {
            console.log("befor")
            let index = data.findIndex(item=>item.id==id);
            data.splice(index,1);
           console.log("after")
           
            fs.writeFile("products.json", JSON.stringify(data), (err) => {
                if (err) {
                    res.status(500).send("dsa  in add products ");
                } else {
                     res.send(id);
                }
            })
           
        }

    })
}

exports.get = get;
