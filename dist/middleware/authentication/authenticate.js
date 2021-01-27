"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = (req, res, next) => {
    const requestHeader = req.headers.authorization;
    if (!requestHeader) {
        return res.status(400).json({ status: 'error', message: 'Bearer Token not found' });
    }
    const accessToken = requestHeader === null || requestHeader === void 0 ? void 0 : requestHeader.split(' ').pop();
    console.log(accessToken);
    if (!accessToken) {
        return res.status(400).json({
            status: 'error',
            message: 'No Access Token.',
        });
    }
    else {
        res.status(200).json({
            status: 'success',
            accessToken: 'create new access token before sending this!!!!',
        });
    }
    next();
};
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map