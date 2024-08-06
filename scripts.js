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


function CardsLists(){
    let listsSaves =  GetLists('lists')
  
    listsSaves.forEach(element => {
        const boxLists = document.querySelector('.lists-fuction')
        const TitleList = document.querySelector('.lists-fuction Card-List-javascript')
        if (TitleList != 'null'){
            console.log('ok');
            const titleNone = document.querySelector('.lists-fuction p')
            titleNone.style.display = 'none'
        
        }
        console.log(boxLists);
        const cardMadeJavascript = document.createElement('div')
        cardMadeJavascript.className = 'Card-List-javascript'
    
        const titleList = document.createElement('h4')
        titleList.textContent = element['NameList']

        const divBox = document.createElement('div')

        const blockDesinegr = document.createElement('div')
        blockDesinegr.className = 'block-Card'

        const divButtonsCard = document.createElement('div')
        divButtonsCard.className = 'Buttons-Card'

        const buttonClick = document.createElement('button')
        buttonClick.textContent = 'Click Here'

        const buttonRemove = document.createElement('button')
        buttonRemove.textContent = 'Remover'

        
        // Puting Elements into boxLists
        boxLists.appendChild(cardMadeJavascript)
        cardMadeJavascript.appendChild(titleList)
        cardMadeJavascript.appendChild(divBox)
        divBox.appendChild(blockDesinegr)
        cardMadeJavascript.appendChild(divButtonsCard)
        divButtonsCard.append(buttonClick,buttonRemove)

        // Config remove button
        buttonRemove.addEventListener('click', () => {
            cardMadeJavascript.remove()
            console.log(titleList);
            for (let i of listsSaves){
                if (i['NameList'] == titleList.textContent){
                    listsSaves.splice(listsSaves.indexOf(i),1)
                    console.log('ok');
                    localStorage.clear()
                    localStorage.setItem('lists', JSON.stringify(listsSaves))
                    break
                }
            }
            if (TitleList != 'null'){
                console.log('ok');
                const titleNone = document.querySelector('.lists-fuction p')
                titleNone.style.display = 'block'
            }
        })

        // Config click button
    });
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
        if (RadioChoise == 'radioList'){
            SaveLists(object_list_Note,'lists')
        }
        if (RadioChoise == 'radioCheck'){
            SaveLists(object_list_Note,'check')
        }
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
CardsLists()
// localStorage.clear()