/**
 * Generated Tool: searchTool_0215
 * Domain: Search
 * ID: 0215
 */
exports.searchTool_0215 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0215:', error);
    throw error;
  }
};
