import * as express from 'express';
import * as jwt from 'jsonwebtoken';
const router  = express.Router();
const PASSWORD = 'let-there-be-dragons';
const SECRET   = 'fuck-me-jerry';

module.exports = (app) => {
  router.use(async (req,res,next) => {
    req["access"] = false;
    let token = '';
    if (req.cookies["auth._token.local"] && req.cookies["auth._token.local"].split(' ')[0] === 'Bearer') {
      token = req.cookies["auth._token.local"].split(' ')[1];
    } else if (req.headers && req.headers.authorization) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token !== '') {
      try {
        let decoded = jwt.verify(token, SECRET);
        if (decoded.access) {
          req["access"] = true;
        }
        next();
      } catch(err) {
        next();
      }
    } else {
      next();
    }
  });

  router.post("/login", async (req, res) => {
    if (req.body.password) {
      if (req.body.password !== PASSWORD) {
        res.status(400).json({ result: 0, message: "Bad credentials" })
      } else {
        jwt.sign(
          { access: true },
          SECRET,
          (err, token) => {
            res.json({ token });
          }
        );
      }
    } else {
      res.status(400).json({ result: 0, message: 'No password specified' });
    }
  });


  // TODO: fix no response (only fires every so often)
  router.get("/me", async (req, res) => {
    if (req["access"]) {
      res.json({
        token: true
      })
    } else {
      res.status(401).json({ result: 0, message: "Unauthorized" });
    }
  });

  return router;
}
