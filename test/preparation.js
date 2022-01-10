window = { navigator: { userAgent: '' } }
document = {
  createElement() {
    return {
      style: {},
      src: '',
    }
  },
  documentElement: { appendChild() {}, removeChild() {} },
}
