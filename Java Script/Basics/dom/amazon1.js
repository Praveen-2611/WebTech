let product=
{
    Pid:101,
    img:"../../../Bootstrap/images/images/bags.webp",
    Pname:'shoes',
    Pprice:2000,
    Pqty:1
}

let htmlcode=
`
    <td>${product.Pid}</td>
    <td><img src="${product.img}" width="50px" height="50px"></td>
    <td>${product.Pname}</td>
    <td>${product.Pprice}</td>
    <td><i class="bi bi-dash-circle-fill" onclick="decCoun()"></i>
     <span id="count">${product.Pqty}</span>
     <i class="bi bi-plus-circle-fill" onclick="incCount()"></i></td>
    <td><span id="total">${product.Pprice*product.Pqty}</span></td>
`


let trTag=document.querySelector('#tr')

trTag.innerHTML=htmlcode
let  countTag=document.querySelector('#count')
let  t_tag=document.querySelector('#total')


function decCoun()
{
    if(product.Pqty>0)
    {
        --product.Pqty
        countTag.innerText=product.Pqty;
        t_tag.innerText=product.Pqty*product.Pprice;
    }
    else
    {
            product.Pqty=1;
            countTag.innerText=product.Pqty;
            t_tag.innerText=product.Pqty*product.Pprice;
    }
}

function incCount()
{
    ++product.Pqty
    countTag.innerText=product.Pqty;
    t_tag.innerText=product.Pqty*product.Pprice;

}