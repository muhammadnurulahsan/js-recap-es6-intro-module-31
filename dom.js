document.getElementById("add-border").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  container.style.border = "5px solid red";
  container.style.padding = "20px";
});

function addBackgroundColor() {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "lightGreen";
  }
}

document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");
  friendDiv.innerHTML = `
    <h3 class="friend-name">Friend</h3>
    <p>Neque dolores molestiae perferendis explicabo!</p>
    `;
  container.appendChild(friendDiv);
});
