'use strict';
const sqlite3 = require('sqlite3').verbose();

const fillPresentsTable= require('./fillTable.js');//require in fillPresentsTable function?
console.log(fillPresentsTable);
const db = new sqlite3.Database('presents.sqlite', (err)=>{
    if (err){
        console.log("ERROR")
    }
    console.log("connected main");
    require('./createTable')()//make sure you have the table in the db
    .then(()=>fillPresentsTable(db))   //then fill it with info
    // .then(()=>perform actions here)
});