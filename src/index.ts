import express from "express";

const app = express()
const PORT=3030
app.use(express.json());
// app.use(userRoutes, companyRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})