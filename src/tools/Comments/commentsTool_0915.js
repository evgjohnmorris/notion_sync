/**
 * Generated Tool: commentsTool_0915
 * Domain: Comments
 * ID: 0915
 */
exports.commentsTool_0915 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0915:', error);
    throw error;
  }
};
