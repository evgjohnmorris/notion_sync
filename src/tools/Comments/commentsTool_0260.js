/**
 * Generated Tool: commentsTool_0260
 * Domain: Comments
 * ID: 0260
 */
exports.commentsTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0260:', error);
    throw error;
  }
};
