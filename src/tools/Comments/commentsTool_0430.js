/**
 * Generated Tool: commentsTool_0430
 * Domain: Comments
 * ID: 0430
 */
exports.commentsTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0430:', error);
    throw error;
  }
};
