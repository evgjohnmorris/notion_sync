/**
 * Generated Tool: commentsTool_0480
 * Domain: Comments
 * ID: 0480
 */
exports.commentsTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0480:', error);
    throw error;
  }
};
