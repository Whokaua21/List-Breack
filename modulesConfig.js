export function SaveLists(arrayFromObjects,TypeList){
    let listObject = JSON.parse(localStorage.getItem(TypeList))
    // console.log(listObject);
    let ArrayObject = listObject
    if (listObject === null){
        ArrayObject = [JSON.stringify(arrayFromObjects)]
        localStorage.setItem(TypeList,JSON.stringify(ArrayObject))
    }
    else{
        // console.log(ArrayObject);
        localStorage.clear()
        listObject.push(JSON.stringify(arrayFromObjects))
        localStorage.setItem(TypeList, JSON.stringify(ArrayObject))
    }
}

export function GetLists(TypeList){
    let listObject = JSON.parse(localStorage.getItem(TypeList))
    let ObjectFromJson = []
    listObject.forEach(element => {
        ObjectFromJson.push(JSON.parse(element))
    });
    return ObjectFromJson;
}