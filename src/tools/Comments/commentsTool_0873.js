/**
 * Generated Tool: commentsTool_0873
 * Domain: Comments
 * ID: 0873
 */
exports.commentsTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0873:', error);
    throw error;
  }
};
