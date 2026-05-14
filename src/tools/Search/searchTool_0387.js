/**
 * Generated Tool: searchTool_0387
 * Domain: Search
 * ID: 0387
 */
exports.searchTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0387:', error);
    throw error;
  }
};
