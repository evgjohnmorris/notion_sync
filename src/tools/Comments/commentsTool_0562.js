/**
 * Generated Tool: commentsTool_0562
 * Domain: Comments
 * ID: 0562
 */
exports.commentsTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0562:', error);
    throw error;
  }
};
