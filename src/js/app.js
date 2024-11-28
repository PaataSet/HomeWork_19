import { data } from "./data.js";

console.log("HomeWork_19");

const body1 = document.querySelector("body");
const newSection1 = document.createElement("section");

// console.log(newSection1);

body1.append(newSection1);

/*
1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
*/

const button = document.querySelector("button");

function delButton() {
  body1.removeChild(button);
}

button.addEventListener("click", delButton);

/*
2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/180/2000/1600  ლინკს და ეს 
შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
*/

const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/id/180/2000/1600";
newSection1.appendChild(newImage);

/*
3. html-ში შექმენით <section id="products-list"></section>
*/

const section2 = document.createElement("section");
section2.id = "products-list";
body1.appendChild(section2);

/*
4. 
    4.1 რეპოზიტორში => data.js ფაილში ნახეთ data   მასივი რომელიც შედგება 4 ობიექტისგან. ეს მასივი გადააკოპირეთ თქვენთან, ან 
    შემოიტანეთ ისე, როგორც ლექციაზე გავაკეთეთ.
    4.2. data    მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ 
    ატვირთული ფოტოს მსგავსი (სტილები დაადეთ  css ის საშუალებით, კლასები ჯავასკრიპტიდან).  ფოტოზე 2 ელემენტია, თქვენ 
    ყველა უნდა გამოიტანოთ   
    4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section  id="products-list"></section  >.
    4.4 დიზაინში  product card ზე არის სურათი, პროდუქტის სახელი, აღწერა და ფასი (ასევე ღილაკები რომელიც ბოლო დავალებისთვის 
    გვჭირდება), თქვენ უნდა  ჩასვათ  title  , stripped_descr ,   price რომელიც არის მასივის ობიექტ ელემენტში.
*/

const dataToUse = data;
console.log(dataToUse);
const logData = (el, index, arr) => {
  console.log(el, index, arr);
};

const formatedArray = dataToUse.map((el, index, arr) => {
  return {
    title: el.title,
    description: el.stripped_descr,
    price: el.price,
  };
});

// console.log(formatedArray);

function renderHTML(data) {
  const formatedData = data.map(
    (el) =>
      `<div class="card">
        <h2>${el.title}</h2>
        <img src=${el.photos[0].large}/>
        <p>${el.stripped_descr}</p>
        <div class="buttons">
             <p>${el.price}</p>
             <button>Show more</button>
             <button>Delete</button>
        </div>
        
    
    </div>`
  );
  return formatedData.join(" ");
}
console.log(renderHTML(data));

section2.innerHTML = renderHTML(data);

/*
5.  (optional) #4 დავალებაში შექმნილ product   card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, წინა დავალებაში 
შექმნილ სტრინგთან ერთად, ფოტოზე როგორცაა), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  product card-ი, ინფო ღილაკზე 
დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ პროდუქტის კატეგორიები (category_tree ელემენტის title მნიშვნელობები)
*/

/*
 *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების შემდეგ
 */

/*
 * გითჰაბზე ვიზუალის ლინკიც დაამატეთ
 */
