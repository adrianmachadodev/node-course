const express = require("express");

const controller = require("../controllers/user");

const router = express.Router();

const path = "user";

/**
 * Ruta: /user GET
 */
router.get(`/`, controller.getData);

/**
 * Ruta: /user GET
 */
router.get(`/:id`, controller.getSingle);

router.put(`/:id`, controller.updateSingle);

router.delete(`/:id`, controller.deleteSingle);

module.exports = router;
