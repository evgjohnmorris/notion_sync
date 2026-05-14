/**
 * Generated Tool: commentsTool_0299
 * Domain: Comments
 * ID: 0299
 */
exports.commentsTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0299:', error);
    throw error;
  }
};
