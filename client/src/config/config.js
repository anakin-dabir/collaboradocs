const config = {
  CLIENT: "https://collaboradocs.vercel.app/",
  SERVER: "https://collaboradocs-production.up.railway.app",
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
