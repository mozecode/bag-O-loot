'use strict';

module.exports=(args)=>{//return the argObj
    let argArray = args;
    let argObj ={}
    if(argArray.length === 3){
        if (argArray[0]==="add"){
            argObj ={
                command:argArray[0],
                toy:argArray[1],
                child:argArray[2],
                delivered:"false"
            }
            return argObj;
        }else if (argArray[0]==="remove"){
            argObj ={
                command:argArray[0],
                child:argArray[1],
                toy:argArray[2],
                delivered:"false"
            }
            return argObj;
        }
    }else if (argArray.length ===2){
        if(argArray[0]==="ls"){
            argObj={
                command:argArray[0],
                child:argArray[1]
            }
            return argObj;
        }else if(argArray[0]==="delivered"){
            argObj={
                child:argArray[1],
                delivered:"true"
            }
            return argObj;
        }
    }else if(argArray.length ===1){
        argObj={
            command:argArray[0]
        }
        return argObj;
    }else{
        console.log("Error.  Please try again.");
    }
}