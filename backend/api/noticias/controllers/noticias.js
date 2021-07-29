'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  /**
   * sufri mas de dos dias en esta cosa :v 
   */

  async findOneUrl(ctx) {
    const { url } = ctx.params;

    const entity = await strapi.services.noticias.findOne({ url });
    return sanitizeEntity(entity, { model: strapi.models.noticias });
  },
};