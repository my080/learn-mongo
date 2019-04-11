'use strict';

/**
 * Period.js controller
 *
 * @description: A set of functions called "actions" for managing `Period`.
 */

module.exports = {

  /**
   * Retrieve period records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.period.search(ctx.query);
    } else {
      return strapi.services.period.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a period record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.period.fetch(ctx.params);
  },

  /**
   * Count period records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.period.count(ctx.query);
  },

  /**
   * Create a/an period record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.period.add(ctx.request.body);
  },

  /**
   * Update a/an period record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.period.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an period record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.period.remove(ctx.params);
  }
};
