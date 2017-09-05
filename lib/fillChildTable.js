'use strict';
const sqlite3 = require('sqlite3').verbose();

module.exports=(db)=>{
    //require in json file by getting the value of the sample "children" from json file
    const {children}= require('../data/children.json');
    children.forEach((child)=>{
        //flip through each item and insert row into table
        // the information from each object in the array
        db.run(`INSERT INTO children VALUES(${child.child_id}, "${child.child_name}")`);
        //don't forget quotation marks around text items
    })
};