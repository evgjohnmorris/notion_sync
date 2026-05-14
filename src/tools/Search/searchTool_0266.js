/**
 * Generated Tool: searchTool_0266
 * Domain: Search
 * ID: 0266
 */
exports.searchTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0266:', error);
    throw error;
  }
};
