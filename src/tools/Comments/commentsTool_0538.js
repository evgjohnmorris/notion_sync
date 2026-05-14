/**
 * Generated Tool: commentsTool_0538
 * Domain: Comments
 * ID: 0538
 */
exports.commentsTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0538:', error);
    throw error;
  }
};
