/**
 * Generated Tool: commentsTool_0537
 * Domain: Comments
 * ID: 0537
 */
exports.commentsTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0537:', error);
    throw error;
  }
};
