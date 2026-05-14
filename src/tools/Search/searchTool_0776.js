/**
 * Generated Tool: searchTool_0776
 * Domain: Search
 * ID: 0776
 */
exports.searchTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0776:', error);
    throw error;
  }
};
