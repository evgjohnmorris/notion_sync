/**
 * Generated Tool: commentsTool_0609
 * Domain: Comments
 * ID: 0609
 */
exports.commentsTool_0609 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0609:', error);
    throw error;
  }
};
