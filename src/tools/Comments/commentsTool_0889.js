/**
 * Generated Tool: commentsTool_0889
 * Domain: Comments
 * ID: 0889
 */
exports.commentsTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0889:', error);
    throw error;
  }
};
