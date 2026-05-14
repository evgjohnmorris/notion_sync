/**
 * Generated Tool: searchTool_0405
 * Domain: Search
 * ID: 0405
 */
exports.searchTool_0405 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0405:', error);
    throw error;
  }
};
