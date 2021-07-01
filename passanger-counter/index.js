let countEl = document.querySelector('.count-el');
        let history = document.querySelector('.history');
        let clear = document.querySelector('.reset');
        let counting = 0;
        function count(){
            counting += 1;
            countEl.innerText = counting;
        }
        function save(){
            history.innerText += " "+counting+" - ";
            countEl.innerText = 0;
            counting = 0;
        }
        function reset(){
            countEl.innerText = 0;
            counting = 0;
            history.innerText = 'Previous entries:';
        }
