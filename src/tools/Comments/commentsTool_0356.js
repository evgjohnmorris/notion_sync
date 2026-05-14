/**
 * Generated Tool: commentsTool_0356
 * Domain: Comments
 * ID: 0356
 */
exports.commentsTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0356:', error);
    throw error;
  }
};
