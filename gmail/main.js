import { primary } from "./primary.js"

console.log(primary)

const emailList = document.querySelector('.email-list');
const pageInfoSpan = document.querySelector('.pageinfo');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let itemNumber = 0;
let limit = 15;
const input = document.querySelector('#search')
const search = document.querySelector(".btn_search")





function createLi(emails){

    if(itemNumber<=0){
        prevBtn.disabled = true
    } else {
        prevBtn.disabled = false
    }

    const lastPage = Math.floor(emails.length/limit)
    if (itemNumber>=lastPage){
        nextBtn.disabled = true
    }else{
        nextBtn.disabled = false
    }
    
    const start = itemNumber*limit
    const end =(itemNumber +1) * limit;
    const partOfEmails = emails.slice(start,end);
    pageInfoSpan.innerHTML = ` ${start}- ${end} of ${emails.length}`

    for(let item of partOfEmails){
        const el = `<li class="email-item">
        <input type="checkbox" name ='${item.id}' id='${item.id}'>
        <i class="fa fa-star"></i>
        <i class="fa fa-arrow-right"></i>
        <span>${item.senderName}</span>
        <span class="email-message">${item.senderEmail}</span>
        <span>${item.messageTitle}</span>
    </li> `
    emailList.innerHTML +=el
    }
}
createLi(primary)

prevBtn.addEventListener ('click',function(){
    emailList.innerHTML = ''
    itemNumber --;
    createLi(primary)
})

nextBtn.addEventListener('click', function(){
    emailList.innerHTML = ''
    itemNumber ++;
    createLi(primary)
})

let emailData = primary
input.addEventListener('input', function(event){
    const email = event.target.value
    let filteredData = emailData.filter((el)=>{
       return el.senderEmail, el.senderName.toLowerCase().includes(email)
    
    })
    console.log (filteredData)


search.addEventListener("click", function(){
    emailList.innerHTML = ""
    createLi (filteredData) 
})
})
