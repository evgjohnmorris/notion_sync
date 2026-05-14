/**
 * Generated Tool: commentsTool_0713
 * Domain: Comments
 * ID: 0713
 */
exports.commentsTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0713:', error);
    throw error;
  }
};
