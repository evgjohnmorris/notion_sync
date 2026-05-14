/**
 * Generated Tool: searchTool_0822
 * Domain: Search
 * ID: 0822
 */
exports.searchTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0822:', error);
    throw error;
  }
};
