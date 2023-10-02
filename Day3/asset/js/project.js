const data = []

function submitData(event) {
  event.preventDefault()

  let projectName = document.getElementById("input-blog-projectName").value
  let startDate = document.getElementById("input-blog-startDate").value
  let endDate = document.getElementById("input-blog-endDate").value
  let description = document.getElementById("input-blog-description").value
  let tech = document.getElementById("input-blog-tech").value
  let image = document.getElementById("input-blog-image").files

  image = URL.createObjectURL(image[0])

  const obj = {
    projectName,
    description,
    startDate,
    endDate,
    image,
    tech,
    postedAt: new Date(),
    author: "Ravli Avdala Kahfi"
  }

  data.push(obj)
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ""

  for(let i = 0; i < data.length; i++) {
    document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[i].image}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${data[i].projectName}</a
        >
      </h1>
      <div class="detail-blog-content">
        ${data[i].postedAt} | ${data[i].author}
      </div>
      <p>
        ${data[i].description}
      </p>

      <div style="float:right; margin: 10px">
        <p style="font-size: 15px; color:grey">1 minutes ago</p>
      </div>
    </div>
  </div>`
  }
}

var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};