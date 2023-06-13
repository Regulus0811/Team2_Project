const $weeksList = document.querySelectorAll('.plans_item');
const $plansList = document.querySelector('.plans_list');
const $selBtn = document.querySelector('.sel_btn');
const $selAllChk = document.querySelector('#sel_all_chk');
const $checkBoxs = document.querySelectorAll('.checkBoxs');
let selFlag = false
let checkAllBoxFlag = true;

const arr = [5, 7, 3, 2]; // 임시 확인용

viewList(1);

// Weeks 클릭 시 내용물 전환
const changDisply = (e) => {
    e.currentTarget.children[1].classList.add('bar_active');
    
    $weeksList.forEach( (item) =>{
        if (item.value !== e.currentTarget.value) {
            item.children[1].classList.remove('bar_active');
        }
    });
    removeAllChild($plansList);
    viewList(e.currentTarget.value);
};

// Weeks 클릭 이벤트
$weeksList.forEach( (item) =>{ // Weeks 선택 이벤트리스너
    item.addEventListener('click', changDisply);
} );

// select 버튼 클릭 이벤트
$selBtn.addEventListener('click', () => {
    const $selChkBox = document.querySelector('.sel_all_chkBox');
    const $checkBoxs = document.querySelectorAll('.checkBoxs');
    const $arrowIconBox = document.querySelectorAll('.arrow_icon_box');

    if (!selFlag) {
        $selChkBox.style.opacity = '1';
        $checkBoxs.forEach((box) => {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
            box.style.transition = 'opacity 0.3s, transform 0.3s';
            box.checked = false;
        });
        $arrowIconBox.forEach((box) => {
            box.style.opacity = '1';
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
            box.style.transition = 'opacity 0.3s, transform 0.3s';
        });

        selFlag = true;
        drag(selFlag);

    } else {
        $selChkBox.style.opacity = '0';
        
        $selAllChk.checked = false;
        $checkBoxs.forEach((box) => {
            box.style.opacity = '0';
            box.style.transform = 'translateX(0)';
            box.style.transition = 'opacity 0.3s, transform 0.3s';
            box.checked = false;
        });
        $arrowIconBox.forEach((box) => {
            box.style.opacity = '0';
            box.style.transform = 'translateX(0)';
            box.style.transition = 'opacity 0.3s, transform 0.3s';
        });
        

        selFlag = false;
    }

    $selChkBox.style.transform = 'translateX(0)';
    $selChkBox.style.transition = 'opacity 0.3s, transform 0.3s';
});


// checkbox 전체 선택 이벤트
$selAllChk.addEventListener('change', () => {

    const $checkBoxs = document.querySelectorAll('.checkBoxs');
    if($selAllChk.checked){
        $checkBoxs.forEach((box) => {
            box.checked = true;
        });
        
    } else{
        $checkBoxs.forEach((box) => {
            box.checked = false;
        });
        checkAllBoxFlag = false;
    }
});

// 전체 체크상태에서 개별 체크박스 변경 시, 전체선택 체크해제
function handleCheckboxChange() {
const $checkBoxs = document.querySelectorAll('.checkBoxs');
let checkAllBoxFlag = true;
$checkBoxs.forEach((box) => {
    if (!box.checked) {
    checkAllBoxFlag = false;
    }
});
$selAllChk.checked = checkAllBoxFlag;
}

function viewList(idx){ // 리스트 출력
    for(let i = 0; i < arr[idx - 1]; i++){
        const listItems = document.createElement('div');
        listItems.classList.add('list_items', 'col-12','draggable');
        listItems.id = 'list_items';
        listItems.draggable;

        const listCkBth = document.createElement('input');
        listCkBth.type = 'checkbox';
        listCkBth.id = `form-check-input${i}`;
        listCkBth.classList.add('form-check-input', 'col-1', 'checkBoxs');
        listCkBth.style.display = 'block';
        listCkBth.style.opacity = '0';
        listCkBth.addEventListener('change', handleCheckboxChange);

        const listCklab = document.createElement('label');
        listCklab.classList.add('form-check-label', 'col-10');
        listCklab.setAttribute('for', `form-check-input${i}`);

        const arrowIconBox = document.createElement('div');
        arrowIconBox.classList.add('arrow_icon_box', 'col-1', 'text-bg-primary');
        
        const arrowIcon = document.createElement('i');
        arrowIcon.classList.add('fa-solid', 'fa-up-down', 'fa-2xl', 'arrow_icon');
    
        arrowIconBox.style.display = 'flex';
        arrowIconBox.style.opacity = '0';
        arrowIconBox.appendChild(arrowIcon);

        const listItem = document.createElement('div');
        listItem.classList.add('card','list_item');
        listItem.id = 'list_item';
        
        const listItemImg = document.createElement('div');
        listItemImg.classList.add('col-3', 'list_item_img');
    
        const listItemBody = document.createElement('div');
        listItemBody.classList.add('card-body', 'col-9','list_item_body');
    
        const listItemBodyHtag = document.createElement('h3');
        listItemBodyHtag.classList.add('card-title', 'nodrag','list_item_body_h');
        listItemBodyHtag.textContent = `후쿠오카 타워${i+1}`;

        const listItemBodyText = document.createElement('div');
        listItemBodyText.classList.add('card-text', 'text-secondary', 'nodrag','list_item_body_text');
        listItemBodyText.textContent = '전체길이 234m로 해변 타워로 일본 최고의 높이를 자랑한다. 후쿠오카시 서부의 부도심의 심벌적인 존재이며, 8000장의 반투명 거울로 뒤덮힌 정삼각형의 샤프한 외관은 ‘미러 세일’이라는 애칭으로 사랑받고 있다. 지상 123m의 5층 전망실에서 바라보는 후쿠오카의 파노라마 경치는 보는 이들을 압도한다. 최신식 TV망원경도 설치되어 있다. 칠월칠석과 크리스마스 시즌에는 반투명 거울에 야간 조명을 설치하여 보다 인상적인 야경을 연출한다. 1층에는 하카타 명과와 후쿠오카의 특산품인 명란젓을 고루 갖춘 기념품 코너, 베이커리&카페, 유럽풍 레스토랑 등도 있다.'
    
        const listItemBodyBottom = document.createElement('div');
        listItemBodyBottom.classList.add('list_item_body_bottom');
    
        const listItemBodyDay = document.createElement('div');
        listItemBodyDay.classList.add('badge', 'bg-info-subtle', 'text-dark', 'p-2', 'list_item_body_day');
    
        const listItemBodyDayIcon = document.createElement('i');
        listItemBodyDayIcon.classList.add('fa-regular', 'fa-clock', 'text-info', 'list_item_body_day_icon');
    
        const listItemBodyDayDate = document.createElement('span');
        listItemBodyDayDate.classList.add('list_item_body_day_date', 'nodrag');
        listItemBodyDayDate.textContent = new Date().toISOString().split("T")[0];
        
        listItemBodyDay.append(listItemBodyDayIcon, listItemBodyDayDate);

        listItemBodyBottom.appendChild(listItemBodyDay);

        listItemBody.append(listItemBodyHtag, listItemBodyText, listItemBodyBottom);

        listItem.append(listItemImg, listItemBody);

        listCklab.appendChild(listItem);

        listItems.append(listCkBth, listCklab, arrowIconBox);

        $plansList.appendChild(listItems);
    }
}

// 자식 노드 삭제
function removeAllChild(list) {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

// Drag & Drop 부분(버그 수정보류)
/**
 * [x] 엘리먼트의 .draggable, .container의 배열로 선택자를 지정합니다.
 * [x] draggables를 전체를 루프하면서 dragstart, dragend를 이벤트를 발생시킵니다.
 * [x] dragstart, dragend 이벤트를 발생할때 .dragging라는 클래스를 토글시킨다.
 * [x] dragover 이벤트가 발생하는 동안 마우스 드래그하고 마지막 위치해놓은 Element를 리턴하는 함수를 만듭니다.
 */
function drag(flag) {
    if(!flag) {
        console.log(flag);
        return;
    }
    else{

    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.plans_list');

    draggables.forEach((el) => {
        el.addEventListener('dragstart', () => {
            el.classList.add('dragging');
        });

        el.addEventListener('dragend', () => {
            el.classList.remove('dragging');
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = Array.from(container.querySelectorAll('.draggable:not(.dragging)'));

        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    }

    containers.forEach((container) => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            container.insertBefore(draggable, afterElement);
        });
    });
    }
}