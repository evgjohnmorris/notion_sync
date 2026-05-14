/**
 * Generated Tool: commentsTool_0382
 * Domain: Comments
 * ID: 0382
 */
exports.commentsTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0382:', error);
    throw error;
  }
};
