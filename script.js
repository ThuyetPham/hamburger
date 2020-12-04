// chú thích

    // khai báo biến steak, salad, cheese, bacon có giá trị bằng chuỗi '<div>nội dung </div>'

    // khai báo mảng streaks, salads ,cheeses, bacons để chứa biến steak, salad, cheese, bacon có giá trị bằng chuỗi '<div>nội dung </div>' được push hoặc splice

    // add onClick trong button hàm addIngredient or removeIngredient( 'steak' ,'salad','cheese','cheese')// chuỗi

// + thêm Ingredient : 

    // gọi hàm function addIngredient chứa tham số type dùng điều kiện if 
    // so sánh tham số type với giá trị chuỗi trong hàm addIngredient ở onClick trong button
        // ex : if( type==='steak'){
            //     đẩy biến steak có giá trị bằng chuỗi '<div>nội dung </div>' vào mảng streaks
            //     streaks.push(steak);
        // }

// + xóa Ingredient:
    // gọi hàm function removeIngredient chứa tham số type dùng điều kiện if 
    // so sánh tham số type với giá trị chuỗi trong hàm removeIngredient ở onClick trong button
        // if( type==='steak'){
        //     //điều kiên if là độ dài của mảng cần lớn hơn ko, tức cần có phần tử trong mảng
            //     if(streaks.length > 0){
                      // lệnh xóa phần tử ở vị trí streaks.length -1, 1 phần tử
                        // streaks.splice(streaks.length -1 , 1);
            //     }
        // }

// + hiển thị ra View
//    khai báo thẻ con
//   - dùng vòng lặp forEach chạy các item trong mảng streaks, salads ,cheeses, bacons
//   - dùng innerHTML 
        //   gọi thẻ Cha('.class').innerHTML = thẻ con



var steak = `<div class="steak"></div>`;
var salad = `<div class="salad">
<img src="./images/salad.JPG" alt="">
</div>`;
var cheese = `<div class="cheese"></div>`;
var bacon = `<div class="bacon">
<img src="./images/bacon.JPG" alt="">
</div>`;

var steaks = [];
var salads = [];
var cheeses = [];
var bacons = [];

function addIngredient(type){
    if(type==='steak') {
        steaks.push(steak);
    }
    if(type==='salad') {
        salads.push(salad);
    }
    if(type==='cheese') {
        cheeses.push(cheese);
    }
    if(type==='bacon') {
        bacons.push(bacon);
    }
    showIngredient();
}
function removeIngredient(type){
    if(type==='steak') {
        if(steaks.length > 0) {
            steaks.splice(steaks.length - 1 , 1);
        }
    };
    if(type==='salad') {
        if(salads.length > 0) {
            salads.splice(salads.length - 1 , 1);
        }
    };
    if(type==='cheese') {
        if(cheeses.length > 0) {
            cheeses.splice(cheeses.length - 1 , 1);
        }
    };
    if(type==='bacon') {
        if(bacons.length > 0) {
            bacons.splice(bacons.length - 1 , 1);
        }
    };
    showIngredient();
}
function showIngredient(){
    var content = '';
    steaks.forEach(steak => {
        content += steak;
    });
    salads.forEach(salad => {
        content += salad;
    });
    cheeses.forEach(cheese => {
        content += cheese;
    });
    bacons.forEach(bacon => {
        content += bacon;
    });
    document.querySelector('.buger-body').innerHTML = content;
}
 