const TotalCount=document.getElementById("Total-Count")
const InterviewCount=document.getElementById("Interview-Count")
const RejectedCount=document.getElementById("Rejected-Count")
const count=document.getElementById("buttons")

function allCardCount(){
    TotalCount.innerText=count.children.length
}
allCardCount()