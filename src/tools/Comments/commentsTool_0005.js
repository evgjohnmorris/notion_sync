/**
 * Generated Tool: commentsTool_0005
 * Domain: Comments
 * ID: 0005
 */
exports.commentsTool_0005 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0005:', error);
    throw error;
  }
};
