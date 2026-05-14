/**
 * Generated Tool: searchTool_0808
 * Domain: Search
 * ID: 0808
 */
exports.searchTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0808:', error);
    throw error;
  }
};
