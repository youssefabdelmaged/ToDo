const taskContainer = document.getElementById("taskContainer");
const input = document.getElementById("input");

const addTask = () => {
  if (input.value === "") {
    alert("write something to add");
  } else {
    let li = document.createElement("li");

    li.innerHTML = input.value;

    taskContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
};

taskContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI"  ) {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", taskContainer.innerHTML);
};

const getData = () => {
  taskContainer.innerHTML = localStorage.getItem("data");
};
getData();
