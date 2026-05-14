/**
 * Generated Tool: commentsTool_0459
 * Domain: Comments
 * ID: 0459
 */
exports.commentsTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0459:', error);
    throw error;
  }
};
