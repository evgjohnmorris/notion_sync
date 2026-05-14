/**
 * Generated Tool: commentsTool_0944
 * Domain: Comments
 * ID: 0944
 */
exports.commentsTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0944:', error);
    throw error;
  }
};
