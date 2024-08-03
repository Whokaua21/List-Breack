export function SaveLists(arrayFromObjects){
    let listObject = JSON.parse(localStorage.getItem('lists'))
    // console.log(listObject);
    let ArrayObject = listObject
    if (listObject === null){
        ArrayObject = [JSON.stringify(arrayFromObjects)]
        localStorage.setItem('lists',JSON.stringify(ArrayObject))
    }
    else{
        // console.log(ArrayObject);
        localStorage.clear()
        listObject.push(JSON.stringify(arrayFromObjects))
        localStorage.setItem('lists', JSON.stringify(ArrayObject))
    }
}

export function GetLists(){
    let listObject = JSON.parse(localStorage.getItem('lists'))
    let ObjectFromJson = []
    listObject.forEach(element => {
        ObjectFromJson.push(JSON.parse(element))
    });
    return ObjectFromJson;
}