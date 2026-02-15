const http = require("http");
const fs = require("fs/promises")

http.createServer(async (req,res)=>{
    let url = req.url.split('/');
    let param = url[url.length-1];

    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({
            message:"Hello use /students to get students list"
        }));
    }

    else if(req.method==="GET" && req.url==="/students"){
        res.writeHead(200,{"content-type":"application/json"});
        const file = await fs.readFile("./data.json");
        let data = JSON.parse(file);
        res.end(JSON.stringify(data));
    }

    else if(req.method==="POST" && req.url==="/Student/Add"){
        let body = "";
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",async()=>{
            const file = await fs.readFile("./data.json","utf-8");
            let d = JSON.parse(file);
            let data = JSON.parse(body);

            if(!data.name || !data.roll)
            {
                res.writeHead(400,{"content-type":"application/json"});
                res.end(JSON.stringify({
                    message:"Name and Roll no are must"
                }));
                return;
            }

            d.push(data);
            await fs.writeFile("data.json",JSON.stringify(d,null,2));

            res.writeHead(201,{"content-type":"application/json"});
            res.end(JSON.stringify(data));
        })
    }

    else if(req.method==="PUT" && req.url.startsWith("/Student/update")){
        let body = "";
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",async()=>{
            const file = await fs.readFile("./data.json","utf-8");
            let d = JSON.parse(file);
            let data = JSON.parse(body);
            let index = d.findIndex(s=>s.roll==param);

            if(index === -1)
            {
                res.writeHead(404,{"content-type":"application/json"});
                res.end(JSON.stringify({
                    message:"Student doesnt exist"
                }));
                return;
            }

            d[index] = {
                ...d[index],...data,roll : param
            }

            await fs.writeFile("data.json",JSON.stringify(d,null,2));

            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(d[index]));
        })
    }

    else if(req.method==="DELETE"&&req.url.startsWith("/Student/delete")){
        const file = await fs.readFile("./data.json","utf-8");
        let d = JSON.parse(file);
        let index = d.findIndex(s=>s.roll==param);

        if(index === -1)
        {
            res.writeHead(404,{"content-type":"application/json"});
            res.end(JSON.stringify({
                message:"Student doesnt exist"
            }));
            return;
        }

        const deletedStudent = d[index];

        d = d.filter(s=>s.roll !== param);
        await fs.writeFile("data.json",JSON.stringify(d,null,2));

        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(deletedStudent));
    }

}).listen(3001,()=>{
    console.log("Server running on port 3001");
})
