/**
 * Generated Tool: commentsTool_0021
 * Domain: Comments
 * ID: 0021
 */
exports.commentsTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0021:', error);
    throw error;
  }
};
