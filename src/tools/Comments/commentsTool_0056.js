/**
 * Generated Tool: commentsTool_0056
 * Domain: Comments
 * ID: 0056
 */
exports.commentsTool_0056 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0056:', error);
    throw error;
  }
};
