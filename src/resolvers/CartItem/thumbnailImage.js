export default async function thumbnailImage(parent, args, context, info) {
  const { Products } = context.collections;
  const { productId } = parent;
  const media = await Products.findOne({ _id: productId });
  if (!media || media?.mediaS3.length === 0) return {};
  return {
    large: media.mediaS3[0].URLs.large,
    medium: media.mediaS3[0].URLs.medium,
    original: media.mediaS3[0].URLs.original,
    small: media.mediaS3[0].URLs.small,
    thumbnail: media.mediaS3[0].URLs.thumbnail
  }
}
