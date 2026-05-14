/**
 * Generated Tool: commentsTool_0424
 * Domain: Comments
 * ID: 0424
 */
exports.commentsTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0424:', error);
    throw error;
  }
};
