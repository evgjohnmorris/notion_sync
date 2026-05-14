/**
 * Generated Tool: commentsTool_0506
 * Domain: Comments
 * ID: 0506
 */
exports.commentsTool_0506 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0506:', error);
    throw error;
  }
};
