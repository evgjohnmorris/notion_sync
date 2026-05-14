/**
 * Generated Tool: commentsTool_0574
 * Domain: Comments
 * ID: 0574
 */
exports.commentsTool_0574 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0574:', error);
    throw error;
  }
};
