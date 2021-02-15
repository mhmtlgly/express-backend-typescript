"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = express_1.Router();
router.post('/signup', controllers_1.signup);
router.post('/signin', controllers_1.signin);
// router.post('/verify/:token', verify);
router.get('/verify', controllers_1.verify);
router.post('/refresh_access_token', controllers_1.refresh_access_token);
router.get('/auto_sign_in', controllers_1.auto_sign_in);
exports.default = router;
// export { router as authentication };
//# sourceMappingURL=index.js.map