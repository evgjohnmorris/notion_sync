/**
 * Generated Tool: commentsTool_0359
 * Domain: Comments
 * ID: 0359
 */
exports.commentsTool_0359 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0359:', error);
    throw error;
  }
};
