/**
 * Generated Tool: commentsTool_0766
 * Domain: Comments
 * ID: 0766
 */
exports.commentsTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0766:', error);
    throw error;
  }
};
