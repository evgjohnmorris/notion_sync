/**
 * Generated Tool: commentsTool_0020
 * Domain: Comments
 * ID: 0020
 */
exports.commentsTool_0020 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0020:', error);
    throw error;
  }
};
