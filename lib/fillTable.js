'use strict';
const sqlite3 = require('sqlite3').verbose();

module.exports=(db)=>{
    //require in json file by getting the value of the property employeelist array from json file
    const {list}= require('../data/presents.json');
    list.forEach((item)=>{
        //flip through each item and insert row into table
        // the information from each object in the array
        db.run(`INSERT INTO presents VALUES(${item.id}, "${item.Child}", "${item.Present}", "${item.Delivered}")`);
        //don't forget quotation marks around text items
    })
};