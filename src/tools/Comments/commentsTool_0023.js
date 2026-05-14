/**
 * Generated Tool: commentsTool_0023
 * Domain: Comments
 * ID: 0023
 */
exports.commentsTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0023:', error);
    throw error;
  }
};
