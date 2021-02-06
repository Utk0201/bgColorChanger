let frm=document.querySelector('#adj');

frm.addEventListener('change',function(e){
    e.preventDefault();
    let rc=document.querySelector('#rcp').value;
    let gc=document.querySelector('#gcp').value;
    let bc=document.querySelector('#bcp').value;
    document.body.style.backgroundColor=`rgb(${rc},${gc},${bc})`;
    console.log(rc);
    console.log(gc);
    console.log(bc);
})
