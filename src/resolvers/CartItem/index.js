import resolveShopFromShopId from "@reactioncommerce/api-utils/graphql/resolveShopFromShopId.js";
import { encodeCartItemOpaqueId } from "../../xforms/id.js";
import imageURLs from "../../util/imageURLs.js";
import productTags from "./productTags.js";
import thumbnailImage from "./thumbnailImage.js";

export default {
  _id: (node) => encodeCartItemOpaqueId(node._id),
  productTags,
  shop: resolveShopFromShopId,
  imageURLs: (node, args, context) => imageURLs(node, context),
  thumbnailImage,
};
