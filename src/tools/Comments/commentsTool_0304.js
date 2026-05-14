/**
 * Generated Tool: commentsTool_0304
 * Domain: Comments
 * ID: 0304
 */
exports.commentsTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0304:', error);
    throw error;
  }
};
