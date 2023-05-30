
const fs = require('fs');

function get(req, res) {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
exports.getById = (req, res) => {

    fs.readFile("users.json", "utf-8", (err, data) => {
        console.log("fs.readFile")
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            let id = req.params.tz;

            data = JSON.parse(data);
            let user = data.find(st => st.tz == id)
            console.log(user);
            if (user == undefined) {
                res.status(200).send(null);
            } else {
                console.log("else");
                res.send(user);

            }

        }


    })
}



exports.login = (req, res) => {

    console.log("login")
    console.log(req.query);
    fs.readFile("users.json", "utf-8", (err, data) => {
        console.log("fs.readFile")
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            console.log("?????????????");
            data = JSON.parse(data)
            console.log("----------------");
            let id = req.query.password;
            console.log("id", id);
            let ind = data.findIndex(obj => obj.password == id)
            console.log(ind);
           
            if (ind == -1) {
                res.status(200).send("undefined");
                console.log(res.send);
            } else {
                console.log("else");
                res.send(data[ind]);
            }

        }


    })
}


exports.post = (req, res) => {

    fs.readFile("users.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let users = JSON.parse(data);
        console.log(users);
        let newUser = { ...req.body, "role": "2" }
        let id = req.body.password;
        console.log("id " + id);
        let ind = users.findIndex(obj => obj.password == id)

        console.log(ind);
        if (ind == -1) {
            users.push(newUser);
            console.log("else");
        } else {
            console.log("the password is exist");
            
        }
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) {
                res.status(500).send("error  in add users ");
            } else {
                res.send(newUser);
            }
        })
    })
}



exports.get = get;

