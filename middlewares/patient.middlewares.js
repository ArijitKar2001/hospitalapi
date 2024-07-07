// Function of register credential validation
export const isValidRegCred = async (req, res, next) => {
  if (!req.body.name || !req.body.number) {
    return res.status(401).json({
      success: false,
      message: "Provide the credentials",
      data: null,
    });
  }
  next();
};
