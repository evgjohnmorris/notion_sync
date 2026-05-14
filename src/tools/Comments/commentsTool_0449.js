/**
 * Generated Tool: commentsTool_0449
 * Domain: Comments
 * ID: 0449
 */
exports.commentsTool_0449 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0449:', error);
    throw error;
  }
};
