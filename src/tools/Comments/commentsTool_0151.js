/**
 * Generated Tool: commentsTool_0151
 * Domain: Comments
 * ID: 0151
 */
exports.commentsTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0151:', error);
    throw error;
  }
};
