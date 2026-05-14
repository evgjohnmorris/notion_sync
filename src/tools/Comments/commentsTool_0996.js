/**
 * Generated Tool: commentsTool_0996
 * Domain: Comments
 * ID: 0996
 */
exports.commentsTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0996:', error);
    throw error;
  }
};
