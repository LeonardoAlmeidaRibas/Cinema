import { Router } from "express";
import { destroy, index, show, update, store } from "../controller/user-controller.js"
const router = Router();

router.post("/", store)
router.get("/", index)
router.get("/:id", show)
router.put("/:id", update)
router.delete("/:id", destroy)

router.post("/signup", signup)
router.post("/login", login)

export default router