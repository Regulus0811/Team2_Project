const $fileInputs = document.querySelector('.file_inputs');
const $uploadFileList = document.querySelector('.upload_fileList');

const fileBox = [];

function deleteFile(idx){

    console.log(fileBox);
    fileBox.splice(idx, 1);
    console.log(fileBox);
    viewFileList();
}

// 이미지 입력
$fileInputs.addEventListener('change', (e) => {
    const files = Array.from(e.target.files); // 유사배열 객체(Array-like)
    // 배열처럼 사용하기위해서는 Array.form()을 사용해야 한다
    // console.log(files);

    if(files.length > 3 || fileBox.length == 3) {
        alert('최대 3개의 이미지만 가능합니다.');
        e.target.value = '';
        return;
    }   
    files.forEach((file) =>{
        fileBox.push(file);
    });

    e.target.value = '';
    
    viewFileList();
});

// 이미지 확인
function viewFileList(){
    removeAllChild($uploadFileList);
    fileBox.forEach((file, idx)=>{
        const div = document.createElement('div');
        div.classList.add('file_box');
        const span = document.createElement('span');
        span.classList.add('file_name');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-xmark', 'text-danger');

        span.innerText = file.name;
        div.append(span, icon);

        
        $uploadFileList.appendChild(div);

        icon.addEventListener('click', () => deleteFile(idx));

    });
}

// 자식 노드 삭제
function removeAllChild(list) {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}