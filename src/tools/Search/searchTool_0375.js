/**
 * Generated Tool: searchTool_0375
 * Domain: Search
 * ID: 0375
 */
exports.searchTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0375:', error);
    throw error;
  }
};
