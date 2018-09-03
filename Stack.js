function Stack() {
    let items = []
    this.push = (e) => items.push(e)
    this.pop = () => items.pop()
    this.peek = () => items[items.length - 1]
    this.isEmpty = () => items.length === 0
    this.size = () => items.length
    this.clear = () => items = []
    this.print = () => console.log(items.toString())
}