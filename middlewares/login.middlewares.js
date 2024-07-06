// Function of login validation
export const isValidLoginCred = async (req, res, next) => {
  try {
    if (req.body.username && req.body.password) {
      next();
    }
    return res.json({
      success: false,
      message: "Provide the credentials",
      data: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong in login",
      data: {
        data: null,
        error: error,
      },
    });
  }
};

export const isLogin = (req, res, next) => {
  if (!req.cookies.jwtToken) {
    return res.json({
      success: false,
      message: "You are not logged in, please log in",
      data: null,
    });
  }
};
