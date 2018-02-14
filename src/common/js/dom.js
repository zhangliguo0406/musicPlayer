export function getData(el,name,val) {
  const profix='data-'
  name=profix+name
  if(val){
     return el.setAttribute(name,val)
  }else {
    return el.getAttribute(name)
  }
}
