/**
 * Generated Tool: commentsTool_0330
 * Domain: Comments
 * ID: 0330
 */
exports.commentsTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0330:', error);
    throw error;
  }
};
