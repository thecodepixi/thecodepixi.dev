function LinkClick(e) {
  let node = e.target
  node.classList.add("link-click")
  setTimeout(() => {
    node.classList.remove("link-click")
  }, 1000)
}

export default LinkClick
