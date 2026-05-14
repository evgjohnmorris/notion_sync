/**
 * Generated Tool: commentsTool_0255
 * Domain: Comments
 * ID: 0255
 */
exports.commentsTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0255:', error);
    throw error;
  }
};
