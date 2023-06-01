// Fetch the content based on the current URL hash
function fetchContent() {
  const hash = window.location.hash.substring(1);
  const content = document.getElementById("content");

  if (hash === "members") {
    fetch("http://localhost:3000/members")
      .then((response) => response.json())
      .then((data) => {
        // Display the members
        let html = "<h2>Members</h2>";
        data.forEach((member) => {
          html += `<p>${member.name}</p>`;
        });
        content.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else if (hash === "courses") {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((data) => {
        // Display the courses
        let html = "<h2>Courses</h2>";
        data.forEach((course) => {
          html += `<p>${course.title}</p>`;
        });
        content.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else if (hash === "board") {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        // Display the posts
        let html = "<h2>Board</h2>";
        data.forEach((post) => {
          html += `<div class="post">
                       <h3>${post.title}</h3>
                       <p>${post.content}</p>
                       <div class="comments">
                         <h4>Comments</h4>
                         ${getCommentsHtml(post.comments)}
                       </div>
                     </div>`;
        });
        content.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

// Fetch the comments and return them as HTML
function getCommentsHtml(comments) {
  let html = "";
  comments.forEach((comment) => {
    html += `<p>${comment.text}</p>`;
  });
  return html;
}

// Add event listener for URL hash changes
window.addEventListener("hashchange", fetchContent);

// Fetch the initial content
fetchContent();
