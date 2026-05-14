/**
 * Generated Tool: searchTool_0505
 * Domain: Search
 * ID: 0505
 */
exports.searchTool_0505 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0505:', error);
    throw error;
  }
};
