const controller = require("../controllers/upload");

router.post(`/`, controller.upload, controller.uploadFile);

const router = express.Router();

module.exports = router;
