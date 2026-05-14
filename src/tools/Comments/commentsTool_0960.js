/**
 * Generated Tool: commentsTool_0960
 * Domain: Comments
 * ID: 0960
 */
exports.commentsTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0960:', error);
    throw error;
  }
};
