/**
 * Generated Tool: searchTool_0353
 * Domain: Search
 * ID: 0353
 */
exports.searchTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0353:', error);
    throw error;
  }
};
