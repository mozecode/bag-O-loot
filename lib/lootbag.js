'use strict';
const sqlite3 = require('sqlite3').verbose();

// const { argv: [,, ...args] } = process//capture the arguments from the command line and go to parse args file
// const {command, toy, child, delivered } = require('./parse-args')(args)//arguments are plugged into the function here so we can organize the arguments in an object
//parse args exports function with returned object we can pluck values from depending on how many values entered by user

// each additional page like add to bag page needs to require in parse args to do the work & return a method?

const fillPresentsTable= require('./fillPresentsTable.js');//require in fillPresentsTable function?
const fillChildTable= require('./fillChildTable.js');
console.log(fillPresentsTable);
const db = new sqlite3.Database('toytracker.sqlite', (err)=>{
    if (err){
        console.log("ERROR")
    }
    console.log("connected main");
    require('./createPresentsTable')()//make sure you have the table in the db
    .then(()=>fillPresentsTable(db))   //then fill it with info
    .then(require('./createChildTable')()
    .then(()=>fillChildTable(db)))


});


//SELECT-- get info
//INSERT INTO--add
//UPDATE
//DELETE FROM--remove