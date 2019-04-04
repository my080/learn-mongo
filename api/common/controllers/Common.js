'use strict';

/**
 * Common.js controller
 *
 * @description: A set of functions called "actions" for managing `Common`.
 */

module.exports = {

  login: async (ctx) => {
    return strapi.services.common.login(ctx);
  },

  logout: async (ctx) => {
    let result = {
      code: 200,
      msg: 'success',
      data: null
    }
    return strapi.services.common.logout(ctx);
  },

  /**
   * Destroy a/an common record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.common.remove(ctx.params);
  }
};
