/**
 * Generated Tool: commentsTool_0702
 * Domain: Comments
 * ID: 0702
 */
exports.commentsTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0702:', error);
    throw error;
  }
};
