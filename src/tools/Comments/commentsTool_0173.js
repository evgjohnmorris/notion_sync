/**
 * Generated Tool: commentsTool_0173
 * Domain: Comments
 * ID: 0173
 */
exports.commentsTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0173:', error);
    throw error;
  }
};
