const config = {
  CLIENT: "https://collabradocs.ramaly.store",
  SERVER: "https://collabradocs.ramaly.store/api",
  ERROR: "Error 505: Server error!",
  SECRET: "my-secret",
  PATHNAMES: {
    HOME: "/",
    AUTH: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFYEMAIL: "/verify-email/:token",
    TEST: "/test",
    DOCUMENTVIEW: "/doc/:id",
    PROJECT: "/project/:id",
    REQUEST: "/request",
    EDITDOCUMENT: "/edit-doc/:id",
    CHANGE: "/get-changes/:id",
    NOTIFICATION: "/notifications",
  },
};

export default config;
