export const toBase64 = (image) =>
  `data:image/png;base64,${Buffer.from(image.data).toString('base64')}`;
