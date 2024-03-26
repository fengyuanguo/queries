import db from "./connect.js";

// minimal price for each product 

const prods = await db.collection('Suppliers')
    .deleteOne(
        {
            name:"gyf"
        },
    
    )
// https://metanit.com/nosql/mongodb/2.7.php
//https://stackoverflow.com/questions/50584694/lookup-nested-array-in-mongodb 
// const prods = await db.collection('Products').find().toArray();
console.log(JSON.stringify(prods, null, 2));
