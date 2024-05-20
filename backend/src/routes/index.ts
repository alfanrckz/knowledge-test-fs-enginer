import * as express from "express"
import AuthController from "../controllers/AuthController";
import ProductController from "../controllers/ProductController";
import authMiddleware from '../middlewares/auth'
import uploadFile from "../middlewares/uploadFile";

const router = express.Router()

//auth
router.post("/register", AuthController.register)
router.post("/login", AuthController.login)

//product
router.post("/product", authMiddleware.auth, uploadFile.upload("image") , ProductController.create)
export default router;