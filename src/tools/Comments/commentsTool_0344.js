/**
 * Generated Tool: commentsTool_0344
 * Domain: Comments
 * ID: 0344
 */
exports.commentsTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0344:', error);
    throw error;
  }
};
