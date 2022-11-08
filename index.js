// Write your solution in this file!

const employee = {name: "Joey", streetAddress: "45 Kelsey" }

function updateEmployeeWithKeyAndValue(obj, addressKey, addressValue){
    const updatedEmployee = { ...employee };
    updatedEmployee[addressKey] = addressValue;

    return updatedEmployee;

}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, addressKey, addressValue){
    const updatedEmployee = obj;
    updatedEmployee[addressKey] = addressValue;

    return updatedEmployee;

}

function deleteFromEmployeeByKey(obj, addressKey){
    const updatedEmployee = { ...obj};
    delete updatedEmployee[addressKey];

    return updatedEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(obj, addressKey){
    const updatedEmployee = obj;
    delete updatedEmployee[addressKey];

    return updatedEmployee;
    
}