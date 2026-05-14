/**
 * Generated Tool: commentsTool_0528
 * Domain: Comments
 * ID: 0528
 */
exports.commentsTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0528:', error);
    throw error;
  }
};
