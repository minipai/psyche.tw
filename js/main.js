var topicList = document.querySelectorAll('.topic')
for (var i = 0; i < topicList.length; ++i) {
  topicList[i].addEventListener('click', function(event){
    event.stopPropagation()
  })
}

var topicContentList = document.querySelectorAll('.topic-content')
for (var i = 0; i < topicContentList.length; ++i) {
  topicContentList[i].addEventListener('click', function(event){
    event.stopPropagation()
  })
}

document.addEventListener('click', function(event) {
  var inputList = document.querySelectorAll('input')
  for (var i = 0; i < inputList.length; ++i) {
    if(event.target!=inputList[i]) {
      inputList[i].checked = false;
    }
  }
})
