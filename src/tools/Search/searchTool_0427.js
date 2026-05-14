/**
 * Generated Tool: searchTool_0427
 * Domain: Search
 * ID: 0427
 */
exports.searchTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0427:', error);
    throw error;
  }
};
