const search = document.querySelector('.search');

search.addEventListener('keyup', function(event){
    let query = event.target.value.toLowerCase();
    let ele = document.getElementsByClassName('data')
    
    for(let i = 0; i < ele.length; i++){
        const current_ele = ele[i].textContent.toLowerCase()

        if(current_ele.includes(query)){
            if(query != ''){
                document.querySelector('.results').style.display = 'block'
                ele[i].style.display = 'block'
            }
            else{
                document.querySelector('.results').style.display = 'none'
            }
        }
        else{
            ele[i].style.display = 'none'
        }
    }
})
