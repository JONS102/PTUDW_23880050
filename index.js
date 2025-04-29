'use strict';
const express = require('express'); // định nghĩa web server đơn giản
const app = express(); // tạo một ứng dụng express
const port = process.env.PORT || 3000; // cổng mà server sẽ lắng nghe// bao  cả biến môi trường
// sử dụng env.PORT vì triển khai trên web không nắm được port nào// Nếu localhost thì sẽ là 5000
app.use(express.static('public')); // cấu hình thư mục public để chứa các file tĩnh như HTML, CSS, JS. từ thư mục fontend có sẵn


app.get('/', (req, res) => { // định nghĩa route cho trang chủ
    res.send('Hello to Eshop!'); // trả về chuỗi "Hello Eshop!" khi truy cập vào trang chủ
});
//Khởi động web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // thông báo khi server đã khởi động
});