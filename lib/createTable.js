//require in sqlite3
"use strict";
const sqlite3 = require('sqlite3').verbose();

module.exports=()=>{
    //wrap in a promise so we know we'll have table before we do anything with it.
        return new Promise((resolve, reject)=>{
            const db = new sqlite3.Database('presents.sqlite', (err)=>{
                if (err){
                    console.log("ERROR")
                }
                db.run('DROP TABLE IF EXISTS presents', () => {//reset, then fill it with latest info
                    db.run("CREATE TABLE IF NOT EXISTS presents(id INT, Child TEXT, Present TEXT, Delivered TEXT)", () => {
                        console.log("presents table made? YES!");
                        resolve();
                    });
                });
            });
        })
    };
