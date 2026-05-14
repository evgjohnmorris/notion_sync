/**
 * Generated Tool: commentsTool_0618
 * Domain: Comments
 * ID: 0618
 */
exports.commentsTool_0618 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0618:', error);
    throw error;
  }
};
