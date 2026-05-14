/**
 * Generated Tool: commentsTool_0808
 * Domain: Comments
 * ID: 0808
 */
exports.commentsTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0808:', error);
    throw error;
  }
};
