//Sidebar
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
//Header1
const but_ser=document.createElement('img')
but_ser.alt='sl'
but_ser.id='sl'
const fld_ser=document.createElement('input')
fld_ser.id='sf'
const notif=document.createElement('img')
notif.alt='nl'
notif.id='nl'
const head_logo=document.createElement('img')
head_logo.alt='hl'
head_logo.id='hl'
const user1=document.createElement('div')
user1.id='user1'
user1.alt='user1'
user1.innerHTML='Syed Kashif Zafar'
const header1=document.querySelector('#header1')
header1.appendChild(but_ser)
header1.appendChild(fld_ser)
header1.appendChild(notif)
header1.appendChild(head_logo)
header1.appendChild(user1)
//Header2
const header2=document.querySelector('#header2')
const h2_logo=document.createElement('img')
h2_logo.id='lh2'
h2_logo.alt='Logo H2'
const grt=document.createElement('div')
grt.innerHTML='Hi there,'
grt.id='grt'
const user2=document.createElement('div')
user2.id='user2'
user2.alt='user2'
user2.innerHTML='Syed Kashif Zafar'
const handle=document.createElement('a')
handle.innerHTML='(@skz)'
handle.id='handle'
handle.href='123'
const but_new=document.createElement('button')
but_new.id='bn'
but_new.innerHTML='New'
const but_up=document.createElement('button')
but_up.innerHTML='Upload'
but_up.id='bu'
const but_sh=document.createElement('button')
but_sh.id='bs'
but_sh.innerHTML='Share'
header2.appendChild(h2_logo)
header2.appendChild(grt)
header2.appendChild(user2)
header2.appendChild(handle)
header2.appendChild(but_new)
header2.appendChild(but_up)
header2.appendChild(but_sh)
const r_bar=document.querySelector('#r_bar')
const ann=document.createElement('div')
ann.innerHTML='Announcement'
ann.id='ann'
const ann_arr=['Site Maintainence','Community Share day','Updated Privacy Policy']
const ann_det=['Thsi is first dummy detail','This is second dummy detail','This is thrid dummy detail']
for (var i=0;i<ann_arr.length;i++){
    const ann_div=document.createElement('div')
    const ann_name=document.createElement('div')
    const ann_detail=document.createElement('div')
    ann_detail.innerHTML=ann_det[i]
    ann_name.id=ann_arr[i].substring(0,3).toLowerCase()
    ann_name.innerHTML=ann_arr[i]
    ann_div.appendChild(ann_name)
    ann_div.appendChild(ann_detail)
    ann.appendChild(ann_div)
}
const tren=document.createElement('div')
tren.id='tren'
tren.innerHTML='Trending'
const tren_user=['tegan','morgan','kendal','alex']
const user_quote=['World Peace Builder','Super Cool Project','Life Changing App','No Traffic Maker']
for (var i=0;i<tren_user.length;i++){
    const user_div=document.createElement('div')
    const user_name=document.createElement('a')
    const user_quo=document.createElement('div')
    const user_logo=document.createElement('img')
    user_name.innerHTML='@'.concat(tren_user[i])
    user_quo.innerHTML=user_quote[i]
    user_logo.alt=tren_user[i].substring(0,2).toLowerCase()
    user_div.id=tren_user[i]
    user_name.id=tren_user[i].concat('_user')
    user_logo.id=tren_user[i].concat('_logo')
    user_quo.id=tren_user[i].concat('_quo')
    user_div.appendChild(user_logo)
    user_div.appendChild(user_name)
    user_div.appendChild(user_quo)
    tren.appendChild(user_div)
}
r_bar.appendChild(ann)
r_bar.appendChild(tren)














