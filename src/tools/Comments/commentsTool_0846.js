/**
 * Generated Tool: commentsTool_0846
 * Domain: Comments
 * ID: 0846
 */
exports.commentsTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0846:', error);
    throw error;
  }
};
