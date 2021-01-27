"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = express_1.Router();
router.post('/stripe', controllers_1.stripePayment);
exports.default = router;
// export { router as stripePayment };
//# sourceMappingURL=index.js.map