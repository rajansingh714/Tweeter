import express from "express";

import v1Routes from "../routes/v1/index.js";
// import router from "../routes/v1/index.js";

const router = express.Router();

router.use("/v1", v1Routes);

export default router;
