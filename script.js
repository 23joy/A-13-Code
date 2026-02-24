let InterviewList=[];
let RejectedList=[];

const TotalCount=document.getElementById("Total-Count")
const InterviewCount=document.getElementById("Interview-Count")
const RejectedCount=document.getElementById("Rejected-Count")

const count=document.getElementById("buttons")
const mainContainer=document.querySelector('main')
const emptysection=document.getElementById("empty-section")

// buttons id style
let AllStylebtn=document.getElementById("All-btn")
let InerterviewStylebtn=document.getElementById("Interview-btn")
let RejectedStylebtn=document.getElementById("Rejected-btn")

function allCardCount(){
    TotalCount.innerText=count.children.length
    InterviewCount.innerText=InterviewList.length
    RejectedCount.innerText=RejectedList.length
}
allCardCount()

// toggol style function
function toggolStyle(id){
    // remove bg and text color all button
    AllStylebtn.classList.remove('bg-[#3B82F6]','text-white')
    InerterviewStylebtn.classList.remove('bg-[#3B82F6]','text-white')
    RejectedStylebtn.classList.remove('bg-[#3B82F6]','text-white')

    // add bg-white & text gray all button

    AllStylebtn.classList.add('bg-white','text-[#64748B]')
    InerterviewStylebtn.classList.add('bg-white','text-[#64748B]')
    RejectedStylebtn.classList.add('bg-white','text-[#64748B]')

    

}
