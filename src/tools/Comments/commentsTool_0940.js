/**
 * Generated Tool: commentsTool_0940
 * Domain: Comments
 * ID: 0940
 */
exports.commentsTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0940:', error);
    throw error;
  }
};
