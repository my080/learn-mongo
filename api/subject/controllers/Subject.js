'use strict';

/**
 * Subject.js controller
 *
 * @description: A set of functions called "actions" for managing `Subject`.
 */

module.exports = {

  /**
   * Retrieve subject records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    console.log(ctx.query);
    if (ctx.query._q) {
      return strapi.services.subject.search(ctx.query);
    } else {
      return strapi.services.subject.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a subject record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.subject.fetch(ctx.params);
  },

  /**
   * Count subject records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.subject.count(ctx.query);
  },

  /**
   * Create a/an subject record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subject.add(ctx.request.body);
  },

  /**
   * Update a/an subject record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subject.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subject record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subject.remove(ctx.params);
  }
};
