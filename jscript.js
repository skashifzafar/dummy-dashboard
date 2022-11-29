const l_arrt=['Home','Profile','Messages','History','Tasks','Communities']
const l_arrb=['Settings','Support','Privacy']
const l_bar=document.querySelector('#l_bar')
const logo_div=document.createElement('div')
const logo_div2=document.createElement('div')
const logo=document.createElement('div')
logo_div.id='logo'
logo.innerHTML='Logo'
const logo_img=document.createElement('img')
logo_img.alt='logo';
logo_div2.appendChild(logo_img)
logo_div2.appendChild(logo)
logo_div.appendChild(logo_div2)
const bart=document.createElement('div')
bart.id='bart'
for(var i=0;i<l_arrt.length;i++){
    const bar_div=document.createElement('div')
    bar_div.id=l_arrt[i].substring(0,3).toLowerCase()
    const bar_logo=document.createElement('img')
    bar_logo.alt=l_arrt[i].substring(0,3).toLowerCase()
    const bar_text=document.createElement('div')
    //bar_div.id=l_arrt[i].substring(0,3).toLowerCase()
    bar_text.innerHTML=l_arrt[i]
    bar_div.appendChild(bar_logo)
    bar_div.appendChild(bar_text)
    bart.appendChild(bar_div)
}
const barb=document.createElement('div')
barb.id='barb'
for(var i=0;i<l_arrb.length;i++){
    const bar_div=document.createElement('div')
    bar_div.id=l_arrb[i].substring(0,3).toLowerCase()
    const bar_logo=document.createElement('img')
    bar_logo.alt=l_arrb[i].substring(0,3).toLowerCase()
    const bar_text=document.createElement('div')
    //bar_div.id=l_arrt[i].substring(0,3).toLowerCase()
    bar_text.innerHTML=l_arrb[i]
    bar_div.appendChild(bar_logo)
    bar_div.appendChild(bar_text)
    barb.appendChild(bar_div)
}
l_bar.appendChild(logo_div)
l_bar.appendChild(bart)
l_bar.appendChild(barb)