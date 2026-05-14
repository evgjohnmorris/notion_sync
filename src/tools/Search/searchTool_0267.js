/**
 * Generated Tool: searchTool_0267
 * Domain: Search
 * ID: 0267
 */
exports.searchTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0267:', error);
    throw error;
  }
};
