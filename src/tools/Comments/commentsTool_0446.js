/**
 * Generated Tool: commentsTool_0446
 * Domain: Comments
 * ID: 0446
 */
exports.commentsTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0446:', error);
    throw error;
  }
};
