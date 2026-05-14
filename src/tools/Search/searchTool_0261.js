/**
 * Generated Tool: searchTool_0261
 * Domain: Search
 * ID: 0261
 */
exports.searchTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0261:', error);
    throw error;
  }
};
