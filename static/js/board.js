const $weeksList = document.querySelectorAll('.plans_item');
const $plansList = document.querySelector('.plans_list');

const arr = [5, 7, 3, 2];

viewList(1);
drag();

const changDisply = (e) => {
    e.currentTarget.children[1].classList.add('bar_active');
    
    $weeksList.forEach( (item) =>{
        if (item.value !== e.currentTarget.value) {
            item.children[1].classList.remove('bar_active');
        }
    });
    removeAllChild($plansList);
    viewList(e.currentTarget.value);
    drag();
};

$weeksList.forEach( (item) =>{ // Weeks 선택 이벤트리스너
    item.addEventListener('click', changDisply);
} );

function viewList(idx){ // 리스트 출력
    for(let i = 0; i < arr[idx - 1]; i++){
        const list_item = document.createElement('div');
        list_item.classList.add('card','list_item', 'draggable');
        list_item.draggable;

        const list_link = document.createElement('a');
        list_link.classList.add('list_link',);
        
    
        const list_item_img = document.createElement('div');
        list_item_img.classList.add('col-3', 'list_item_img');
    
        const list_item_body = document.createElement('div');
        list_item_body.classList.add('card-body', 'col-9','list_item_body');
    
        const list_item_body_h = document.createElement('h3');
        list_item_body_h.classList.add('card-title', 'nodrag','list_item_body_h');
        list_item_body_h.textContent = `후쿠오카 타워${i+1}`;

        const list_item_body_text = document.createElement('div');
        list_item_body_text.classList.add('card-text', 'text-secondary', 'nodrag','list_item_body_text');
        list_item_body_text.textContent = '전체길이 234m로 해변 타워로 일본 최고의 높이를 자랑한다. 후쿠오카시 서부의 부도심의 심벌적인 존재이며, 8000장의 반투명 거울로 뒤덮힌 정삼각형의 샤프한 외관은 ‘미러 세일’이라는 애칭으로 사랑받고 있다. 지상 123m의 5층 전망실에서 바라보는 후쿠오카의 파노라마 경치는 보는 이들을 압도한다. 최신식 TV망원경도 설치되어 있다. 칠월칠석과 크리스마스 시즌에는 반투명 거울에 야간 조명을 설치하여 보다 인상적인 야경을 연출한다. 1층에는 하카타 명과와 후쿠오카의 특산품인 명란젓을 고루 갖춘 기념품 코너, 베이커리&카페, 유럽풍 레스토랑 등도 있다.'
    
        const list_item_body_bottom = document.createElement('div');
        list_item_body_bottom.classList.add('list_item_body_bottom');
    
        const list_item_body_day = document.createElement('div');
        list_item_body_day.classList.add('badge', 'bg-info-subtle', 'text-dark', 'p-2', 'list_item_body_day');
    
        const list_item_body_day_icon = document.createElement('i');
        list_item_body_day_icon.classList.add('fa-regular', 'fa-clock', 'text-info', 'list_item_body_day_icon');
    
        const list_item_body_day_date = document.createElement('span');
        list_item_body_day_date.classList.add('list_item_body_day_date', 'nodrag');
        list_item_body_day_date.textContent = new Date().toISOString().split("T")[0];

        list_item_body_day.append(list_item_body_day_icon, list_item_body_day_date);

        list_item_body_bottom.appendChild(list_item_body_day);

        list_item_body.append(list_item_body_h, list_item_body_text, list_item_body_bottom);

        list_link.append(list_item_img, list_item_body);

        list_item.append(list_link);
    
        // list_link.addEventListener('drag', (e) => {
        //     console.log(e);
        //     console.log('ddddd');

        // });

        $plansList.appendChild(list_item);

    }
}

// 자식 노드 삭제
function removeAllChild(list){
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}


/**
 * [x] 엘리먼트의 .draggable, .container의 배열로 선택자를 지정합니다.
 * [x] draggables를 전체를 루프하면서 dragstart, dragend를 이벤트를 발생시킵니다.
 * [x] dragstart, dragend 이벤트를 발생할때 .dragging라는 클래스를 토글시킨다.
 * [x] dragover 이벤트가 발생하는 동안 마우스 드래그하고 마지막 위치해놓은 Element를 리턴하는 함수를 만듭니다.
 */

function drag(){
    const $ = (select) => document.querySelectorAll(select);
    const draggables = $('.draggable');
    const containers = $('.plans_list');

    draggables.forEach(el => {
        el.addEventListener('dragstart', () => {
            el.classList.add('dragging');
        });

        el.addEventListener('dragend', () => {
            el.classList.remove('dragging')
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect() //해당 엘리먼트에 top값, height값 담겨져 있는 메소드를 호출해 box변수에 할당
            const offset = y - box.top - box.height / 2 //수직 좌표 - top값 - height값 / 2의 연산을 통해서 offset변수에 할당
            if (offset < 0 && offset > closest.offset) { // (예외 처리) 0 이하 와, 음의 무한대 사이에 조건
                return { offset: offset, element: child } // Element를 리턴
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    };

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging')
            // container.appendChild(draggable)
            container.insertBefore(draggable, afterElement);
        })
    });
};