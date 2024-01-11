"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => {
    try {
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "Let's do this...!",
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error recorded",
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;
