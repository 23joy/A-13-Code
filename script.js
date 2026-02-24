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

    
    const selected=document.getElementById(id)
    selected.classList.remove('bg-white','text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]','text-white')
    if(id=="Interview-btn"){
        count.classList.add('hidden')
        emptysection.classList.remove('hidden')
    }
    else if(id=='All-btn'){
        count.classList.remove('hidden')
        emptysection.classList.add('hidden')
    }
    else if(id=='Rejected-btn'){
        count.classList.add('hidden')
        emptysection.classList.remove('hidden')
    }

}
mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn')){
        const parentNode=event.target.parentNode.parentNode;
        const Mobilename=parentNode.querySelector('.Mobile-name').innerText
        const Developer=parentNode.querySelector('.Developer').innerText
        const Remote=parentNode.querySelector('.Remote').innerText
        const selectbtn=parentNode.querySelector('.select-btn').innerText
        const Notes=parentNode.querySelector('.Notes').innerText
        parentNode.querySelector('.select-btn').innerText='INTERVIEW'
        const buttonInfo={
            Mobilename,
            Developer,
            Remote,
            selectbtn:'INTERVIEW',
            Notes,
        }
        const plantExist=InterviewList.find(item=>item.Mobilename==buttonInfo.Mobilename)
        if(!plantExist){
            InterviewList.push(buttonInfo)
        }
        renderInterviewList()
        allCardCount()
    }
    
})
//InterviewList rendar
function renderInterviewList(){
    emptysection.innerText=''
    for(let Inter of InterviewList){
        console.log(Inter)
        let div=document.createElement('div')
        div.className='bg-white lg:flex justify-between p-5 rounded'
        div.innerHTML=`
         <div class="space-y-4">
                    <div>
                        <h1 class="Mobile-name text-[#002C5C] font-semibold text-[18px]">${Inter .Mobilename}</h1>
                        <p class="Developer  text-[#64748B] font-[16px] ">React Native Developer</p>
                    </div>
                    <p class="Remote text-[#64748B] font-[14px]">Remote • Full-time • $130,000 - $175,000</p>
                    <div>
                        <button class=" select-btn bg-[#EEF4FF] px-3 py-2 text-[#002C5C] rounded">${Inter .selectbtn}</button>

                        <h2 class="Notes text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</h2>
                    </div>
                    <button class="interview-btn border border-green-600 px-3 py-2 rounded text-green-700">INTERVIEW</button>
                    <button class="rejected-btn border border-red-600 px-3 py-2 rounded text-red-700">REJECTED</button>
                </div>
                <div>
                    <button class=" delete-btn border rounded-full p-1.5"><i class="fa-solid fa-trash-can"></i></button>
                </div>`
            emptysection.appendChild(div)
    }
}

