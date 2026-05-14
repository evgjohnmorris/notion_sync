/**
 * Generated Tool: searchTool_0441
 * Domain: Search
 * ID: 0441
 */
exports.searchTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0441:', error);
    throw error;
  }
};
