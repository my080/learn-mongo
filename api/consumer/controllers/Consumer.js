'use strict';

/**
 * Consumer.js controller
 *
 * @description: A set of functions called "actions" for managing `Consumer`.
 */

module.exports = {

  /**
   * Retrieve consumer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.consumer.search(ctx.query);
    } else {
      return strapi.services.consumer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a consumer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consumer.fetch(ctx.params);
  },

  /**
   * Count consumer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consumer.count(ctx.query);
  },

  /**
   * Create a/an consumer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consumer.add(ctx.request.body);
  },

  /**
   * Update a/an consumer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consumer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consumer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consumer.remove(ctx.params);
  }
};
