/**
 * Generated Tool: commentsTool_0551
 * Domain: Comments
 * ID: 0551
 */
exports.commentsTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0551:', error);
    throw error;
  }
};
