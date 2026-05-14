/**
 * Generated Tool: searchTool_0238
 * Domain: Search
 * ID: 0238
 */
exports.searchTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0238:', error);
    throw error;
  }
};
