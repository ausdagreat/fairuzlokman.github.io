let inputValue = document.getElementById("inputText").value
action = document.getElementById("inputText")
action.addEventListener("input", addTask)

function addTask(){
  node = document.createElement("li")
  inputValue = document.getElementById("inputText").value
  textNode = document.createTextNode(inputValue)
  node.appendChild(textNode)
  node.innerHTML += `<span><input style="width: 20px; height: 20px;" type="checkbox"></span>
  <span style="background-color: #212121; position: absolute; right: 30px;" onclick="this.parentElement.style.display = 'none';">x</span>`

  saveTask()
}

function saveTask(){
  if(inputValue !== ""){
    action.addEventListener("keydown", function(event) {
      if (event.key === "Enter"){
        document.getElementById("myList").appendChild(node);
        document.getElementById("inputText").value = "";
      }
    })
  } 
}

