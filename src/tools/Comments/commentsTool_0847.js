/**
 * Generated Tool: commentsTool_0847
 * Domain: Comments
 * ID: 0847
 */
exports.commentsTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0847:', error);
    throw error;
  }
};
