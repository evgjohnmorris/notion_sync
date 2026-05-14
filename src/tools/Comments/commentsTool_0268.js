/**
 * Generated Tool: commentsTool_0268
 * Domain: Comments
 * ID: 0268
 */
exports.commentsTool_0268 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0268:', error);
    throw error;
  }
};
