"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = express_1.Router();
router.post('/', controllers_1.contact);
exports.default = router;
//# sourceMappingURL=index.js.map