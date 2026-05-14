/**
 * Generated Tool: commentsTool_0530
 * Domain: Comments
 * ID: 0530
 */
exports.commentsTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0530:', error);
    throw error;
  }
};
