/**
 * Generated Tool: commentsTool_0911
 * Domain: Comments
 * ID: 0911
 */
exports.commentsTool_0911 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0911:', error);
    throw error;
  }
};
