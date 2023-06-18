// postAddController.js
export async function submitPost() {

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value.trim();
  
    // 게시글 제목과 내용이 비어 있는지 확인
    if (!title || !content) {
      alert("게시글 제목과 내용을 모두 입력해 주세요.");
      return;
    }
  
    // 게시물 번호 생성
    let postNumber = localStorage.getItem("postNumber");
    // let postNumber = null;
    if (postNumber === null) {
      postNumber = 1;
    } else {
      postNumber = parseInt(postNumber) + 1;
    }
    localStorage.setItem("postNumber", postNumber);
  
    // 작성 시간
    const currentTime = new Date().toLocaleString();
  
    // 서버로 전송할 객체 생성
    const postData = {
      postNumber: postNumber,
      title: title,
      author: author,
      content: content,
      timestamp: currentTime
    };
  
    // fetch() 함수를 사용하여 서버에 전송
    try {
      const response = await fetch('/postAdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
  
      console.log(postData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      window.location.href = "/community";
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }
  