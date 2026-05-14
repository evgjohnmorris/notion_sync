/**
 * Generated Tool: commentsTool_0577
 * Domain: Comments
 * ID: 0577
 */
exports.commentsTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0577:', error);
    throw error;
  }
};
