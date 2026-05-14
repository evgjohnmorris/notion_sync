/**
 * Generated Tool: commentsTool_0329
 * Domain: Comments
 * ID: 0329
 */
exports.commentsTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0329:', error);
    throw error;
  }
};
