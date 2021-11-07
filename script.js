let local_calc_btn = document.getElementById("calc_btn");
local_calc_btn.addEventListener("click", calc);

let local_add_btn = document.getElementById("add_btn");
local_add_btn.addEventListener("click", addproduct);



var local_select = document.getElementById("item");
var local_mass = document.getElementById("massa_produto");
var local_ulname = document.getElementById("list_name");
var local_ulmass = document.getElementById("list_mass");
var local_main = document.getElementById("main")


function Food(name,carb,prot,fat,fib,mass) {
    this.name = name;
    this.carb = carb;
    this.prot = prot;
    this.fat = fat;
    this.fib = fib;
    this.mass = mass;
}

const food = new Food()

//matriz representando os objetos|food
var foodf = [20]; 
var foodadd = [10];

//zerando a matriz 
for (var i = 0; i<=20; i++){
    foodf[i] = 0;
    foodadd[i] = 0;
}

//Objetos, Alimentos
var aveia = new Food('Aveia','66.6','13.9','1.5','9.1','0'); foodf[0] = aveia;
var banana = new Food('Banana','22.3','1.8','0.1','2.6','0'); foodf[1] = banana;
var iogurte = new Food('Iogurte','11','2.75','1','0','0'); foodf[2] = iogurte;
var leite = new Food('Leite','4.6','3.1','1.2','0','0'); foodf[3] = leite;
var suplemento = new Food('Suplemento','80','13.34','0.75','0','0'); foodf[4] = suplemento;
var sucrilhos = new Food('Sucrilhos','76.7','6.34','4.67','5.66','0'); foodf[5] = sucrilhos;

//criando opções

var i = 0;
do{
    var opt = document.createElement('option');
    opt.value = foodf[i].name;
    opt.innerHTML = foodf[i].name;
    local_select.appendChild(opt);
    i++;
 } while (foodf[i] != '0');


var numlist = 0;
function addproduct() {
    //adiciona o obj selecionado a matriz numlist
    for(i = 0; i<=20; i++)
        if(local_select.value == foodf[i].name) {
            foodf[i].mass = local_mass.value;
            foodadd[numlist] = foodf[i];
            foodadd[numlist].carb *= (foodadd[numlist].mass /100)
            foodadd[numlist].prot *= (foodadd[numlist].mass /100)
            foodadd[numlist].fat *=  (foodadd[numlist].mass /100)
            foodadd[numlist].fib *=  (foodadd[numlist].mass /100)            
            addlist();
        }
}

function addlist() {
        var li = document.createElement('li');
        li.innerHTML = foodadd[numlist].name;
        local_ulname.appendChild(li);
        var li = document.createElement('li');
        li.innerHTML = foodadd[numlist].mass + 'g';
        local_ulmass.appendChild(li);
        numlist ++;
}

//calculando
var carbs=0, prots=0, fats=0, fibs=0, masss=0;
function calc(){
    for (numlist--; numlist>=0; numlist--) {
        carbs += foodadd[numlist].carb
        prots+= foodadd[numlist].prot
        fats+= foodadd[numlist].fat
        fibs+= foodadd[numlist].fib
        masss+= foodadd[numlist].mass
    }


    openresult();
}

function openresult() {
    local_main.innerHTML =  '<section id="section_result">        <div id="carbs">Carboidratos:            <div id="carbs_value">value</div>        </div>        <div id="prot">Proteinas:            <div id="prot_value">value</div>        </div>        <div id="fat">Gorduras:            <div id="fat_value">value</div>        </div>        <div id="fib">Fibras:            <div id="fib_value">value</div>        </div>    </section>    <input type="button" id="refcalc_btn" value="Refazer calculo">'
    var local_rcarb = document.getElementById("carbs_value")
    var local_rprot = document.getElementById("prot_value")
    var local_rfat = document.getElementById("fat_value")
    var local_rfib = document.getElementById("fib_value")
    local_rcarb.innerHTML = carbs  + 'g'
    local_rprot.innerHTML = prots + 'g'
    local_rfat.innerHTML = fats + 'g'
    local_rfib.innerHTML = fibs + 'g'

    
    let local_refcal_btn = document.getElementById("refcalc_btn");
    local_refcal_btn.addEventListener("click", reload);
        function reload(){
            window.location.reload();
        }
}

function openindex() {
    local_main.innerHTML = '<section id="header_input">            <div id="choose_item">                <label for="item" id="label_choose">Escolha um item:</label>                <select name="item_selected" id="item" required>                    <option value="" disabled>--</option>                                    </select>            </div>            <div id="mass_item">                <label for="massa_produto" id="label_mass">Digite o peso:</label>               <input type="number" name="peso" id="massa_produto" required>            </div>            <input type="button" value="add" id="add_btn">        </section>        <section id="product_detail">            <div id="name_product_detail">                <header id="header_name_product_detail">Produto</header>                <ul id="list_name">                                   </ul>            </div>             <aside id="mass_product_detail">                <header id="header_mass_product_detail">Massa</header>                <ul id="list_mass">                                    </ul>            </aside>                        </section>        <input type="button" value="Calc" id="calc_btn"></input>'
}