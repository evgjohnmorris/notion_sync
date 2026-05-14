/**
 * Generated Tool: commentsTool_0262
 * Domain: Comments
 * ID: 0262
 */
exports.commentsTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0262:', error);
    throw error;
  }
};
