const randomecolr = function()
{
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++)
    {
        color +=hexa[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalid
const startchangingcolor = function()
{
     if(! intervalid)
     {
        intervalid = setInterval(changebgcolor,1000);
     }
};
function changebgcolor()
{
    document.body.style.backgroundColor = randomecolr();
}
const stopchangingcolor = function(){
    clearInterval(intervalid);
    intervalid = null;
}

document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);