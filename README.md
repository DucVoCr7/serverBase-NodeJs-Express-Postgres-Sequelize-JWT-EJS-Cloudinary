# Vo Hoai Duc

- backendYahoo360

- Routes: thư mục dẫn đường, khi người dùng vào web, vào đây đầu tiên
- Services: nhận data từ controllers, thao tác với data đó về phía database

- REST API: là 1 chuẩn viết API, quy định:
    + Khi muốn tạo mới thông tin dùng method post - C(Create)
    + Khi muốn lấy thông tin dùng method get - R(Read)
    + Khi muốn sửa đổi thông tin dùng method put, patch - U(Update)
    + Khi muốn xóa thông tin dùng method delete - D(Delete)
- Mô hình MVC: moudles, views, controllers

- Sequelize/ sequelize-cli dùng để thao tác với mysql bằng code.
    + yarn sequelize-cli init: tạo ra file config.json, thư mục migrations, models, seeders
    + Các lệnh để thao tác với mysql trong nodejs tham khảo tại sequelize.org


- Ask:
    + Xóa nhiều dòng từ nhiều bảng liên quan nhau nhanh gọn, không phải đi xóa từng cái ???