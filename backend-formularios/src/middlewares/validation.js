const { body, validationResult } = require("express-validator");

const validateUser = [
  body("username").isString().isLength({ min: 3 }).trim(),
  body("password").isString().isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser };
