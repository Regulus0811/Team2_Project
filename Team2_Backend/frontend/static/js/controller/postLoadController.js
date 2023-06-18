export async function loadPosts() {
    try {
        console.log("게시글 데이터 요청(클라이언트)");
      const response = await fetch("/postLoad");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error("Error during fetch:", error);
      return null;
    }
  }
  