



export async function grabComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
          console.log(json)

          let commentContainer = document.querySelector('.commentContainer')

        json.slice(0,15).forEach((comt) => {
            let comment = document.createElement('comment');
            comment.setAttribute('class', 'comment');
            comment.innerHTML=comt.body
            commentContainer.append(comment);
          });
      });
  }

  grabComments()