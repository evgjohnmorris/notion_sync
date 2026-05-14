/**
 * Generated Tool: searchTool_0447
 * Domain: Search
 * ID: 0447
 */
exports.searchTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0447:', error);
    throw error;
  }
};
