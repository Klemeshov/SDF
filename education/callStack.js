const a =() => {

}

const b = () => {
  a();
}

const c = () => {
  console.log('asd')
  b();
}

setTimeout(() => {
  console.log('qwe')
}, 0)

c();