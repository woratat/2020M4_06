// document.getElementById('cancel').addEventListener('mousemove',function(e){
//     if(e.shiftKey){
//         console.log(`x = ${e.clientX} y = ${e.clientY}`)
//     }
//     // console.log(typeof(e))
//     // console.log(`x = ${e.clientX} y = ${e.clientY}`)
// })

// document.getElementById('ok').addEventListener('click',function(e){
//     // alert(document.getElementById('ok').id)
//     alert('ok')
// }
// )
// document.getElementById('cancel').addEventListener('click',function (e){
//     // alert(document.getElementById('cancel').id)
//     alert('cancel')
// })
// document.getElementById('no').addEventListener('click',function (e){
//     // alert(document.getElementById('no').id)
//     alert('no')
// })

// document.getElementById('ok').addEventListener('click',function(e){
//     document.getElementById('no').classList.add('toggleOn')  //เพิ่ม toggleOn ใน element (ดูในconsole log)
//     console.log(document.getElementById('no'))  //แสดงค่าของปุ่ม no
// })


document.getElementById('ok').addEventListener('click',function(e){  //ปุ่มเปลียนสี

    let noElement = document.getElementById('no')
    if(noElement.classList.contains('toggleOn')){ //ถ้ามี toggleOn 
        noElement.classList.replace('toggleOn','toggleOff') //เอาอันแรกออก เอาอันหลังใส่
    }else if(noElement.classList.contains('toggleOff')){
        noElement.classList.replace('toggleOff','toggleOn')
    }else{  //ถ้าไม่มีทั้งคู่
        noElement.classList.add('toggleOn')
    }
})

var borderTick=2  
document.getElementById('cancel').style.border = `${borderTick}px solid white`  //ใส่ borderให้ปุ่ม cancel

var cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mouseover',function (e){
    cancelElement.innerHTML = `
    <div class = "container-col">
        <div class="flex-item">
            no 1
        </div> 
        <div class="flex-item">
            no 2
        </div> 
    </div>
    `
})

cancelElement.addEventListener('mouseleave',function(e){
    cancelElement.innerHTML = `
    cancel
    `
})