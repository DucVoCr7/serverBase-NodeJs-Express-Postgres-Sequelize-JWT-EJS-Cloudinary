import express from 'express'

const viewEngine = (app)=> {
    app.use(express.static('./src/public')) // Chỉ cho phép truy cập thư mục public
    app.set("view engine", "ejs")
    // view engine giúp có thể viết logic trong file html, trong dự án này dùng EJS
    app.set("views", "./src/views") // Chỉ xét file trong mục views
}

export default viewEngine;