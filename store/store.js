export const asyncTypes = action => ({
  HANDLER: `${action}_HANDLER`,
  SUCCESS: `${action}_SUCCESS`,
});

export const USERS = {
  LOGIN: asyncTypes('USER/LOGIN'),
};
