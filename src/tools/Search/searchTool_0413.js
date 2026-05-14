/**
 * Generated Tool: searchTool_0413
 * Domain: Search
 * ID: 0413
 */
exports.searchTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0413:', error);
    throw error;
  }
};
