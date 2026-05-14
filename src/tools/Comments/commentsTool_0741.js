/**
 * Generated Tool: commentsTool_0741
 * Domain: Comments
 * ID: 0741
 */
exports.commentsTool_0741 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0741:', error);
    throw error;
  }
};
