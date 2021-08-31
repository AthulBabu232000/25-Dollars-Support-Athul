const dissolve = (e) =>{

    const parent = e.parentElement;
    if(e.style.display == 'none'){
        e.style.display = 'inline-block'
    }else{
        e.style.display = "none"
    }

}

const decrement = (e) =>{
    const parent = e.parentElement;
    const grandParent = parent.parentElement;
    const dissolveBtn = grandParent.querySelector('.add-to')
    const counter = parent.querySelector('.counter-content');
    
    if(counter.value < 2){
        dissolve(dissolveBtn)
    }
    else{
        counter.value = parseInt(counter.value) - 1
    }

}

const increment = (e) =>{
    const parent = e.parentElement;
    const counter = parent.querySelector('.counter-content');
    
    counter.value = parseInt(counter.value) + 1
}