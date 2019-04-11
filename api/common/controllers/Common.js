'use strict';

/**
 * Common.js controller
 *
 * @description: A set of functions called "actions" for managing `Common`.
 */

function isSuccess () {

}

module.exports = {

  login: async (ctx) => {
    return strapi.services.common.login(ctx.request.body);
  },

  logout: async (ctx) => {
    return strapi.services.common.logout(ctx);
  },

  register: async (ctx) => {
    let isSuccess = strapi.services.common.register(ctx.query)
    let returnObj = {
      code: 200,
      msg: 'success',
      success: true,
      data: {}
    }
    if (isSuccess) {
      returnObj.success = false;
    }

    return returnObj;
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
