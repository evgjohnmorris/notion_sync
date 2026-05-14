/**
 * Generated Tool: searchTool_0453
 * Domain: Search
 * ID: 0453
 */
exports.searchTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0453:', error);
    throw error;
  }
};
