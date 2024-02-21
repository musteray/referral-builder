const isLocal = process.env.ENVIRONMENT;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = encodeURIComponent(process.env.DB_PASS);

export default {
  ...process.env,
  mongoConnectionString: `mongodb${isLocal === "local" ? "" : "+srv"
    }://${dbUser}:${dbPass}@${dbHost}/${dbName}?${isLocal === "local"
      ? "authSource=admin"
      : "retryWrites=true&w=majority&readPreference=primary"
    }`,
};
