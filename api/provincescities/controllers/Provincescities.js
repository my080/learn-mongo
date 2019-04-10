'use strict';

/**
 * Provincescities.js controller
 *
 * @description: A set of functions called "actions" for managing `Provincescities`.
 */

module.exports = {

  /**
   * Retrieve provincescities records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.provincescities.search(ctx.query);
    } else {
      return strapi.services.provincescities.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a provincescities record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.provincescities.fetch(ctx.params);
  },

  /**
   * Count provincescities records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.provincescities.count(ctx.query);
  },

  /**
   * Create a/an provincescities record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.provincescities.add(ctx.request.body);
  },

  /**
   * Update a/an provincescities record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.provincescities.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an provincescities record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.provincescities.remove(ctx.params);
  }
};
