import { SaveLists } from "./modulesConfig.js"
import { GetLists } from "./modulesConfig.js"
function CreateListe(){
    const BoxCreateList = document.querySelector('.Box-Create')
    BoxCreateList.style.display = 'block'

  
}
function ExitCreateList(){
    const BoxCreateList = document.querySelector('.Box-Create')
    BoxCreateList.style.display = 'none'
}
function DocumentJsonToApi(){
    try{
        const formCreateList = document.querySelector('.Form-Create-list')
        const contedData = document.querySelector('.Conted-data')
        const describeList = contedData.querySelector('#conted-list').value
        const RadioVeriy = document.getElementsByName('radio-button')
        let RadioChoise = undefined
        for (let i = 0;i < RadioVeriy.length;i++){
            if (RadioVeriy[i].checked){
                RadioChoise = RadioVeriy[i].value
                break
            }
        }
        let receiveNameList = formCreateList['inputName'].value
        let receiveColorHexa = formCreateList['inputColorhexa'].value
        if (RadioChoise == undefined || receiveNameList == ''){
            throw 'Falta de dados indentificado'
        }
        if (receiveColorHexa == ''){
            receiveColorHexa = '#FFFFF'
        }
        let object_list_Note = {}
        object_list_Note ={
            'NameList':receiveNameList,
            'Color':receiveColorHexa,
            'TypeList': RadioChoise,
            'Describe': describeList
        }
        SaveLists(object_list_Note)


        

        
    }
    catch (error){
        alert(`Dado Invalido: ${error}`)

    }
}
const ClickImgExit = document.querySelector('.Title-config-list svg')
const ButtonCreateList = document.getElementById('Button-create-list')
const ButtonCreateNote = document.getElementById('Button-create-Note')
const ButtonSubmitList = document.getElementById('ButtonSub')
ButtonCreateList.addEventListener('click',CreateListe)
ButtonSubmitList.addEventListener('click',DocumentJsonToApi)
ClickImgExit.addEventListener('click',ExitCreateList)
// console.log(JSON.parse(localStorage.getItem('Lists')));
let l = GetLists()
console.log(l)
// localStorage.clear()