"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const middleware_1 = require("../../middleware");
const router = express_1.Router();
router.post('/', middleware_1.authorize, controllers_1.secured);
exports.default = router;
//# sourceMappingURL=index.js.map