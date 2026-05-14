/**
 * Generated Tool: searchTool_0214
 * Domain: Search
 * ID: 0214
 */
exports.searchTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0214:', error);
    throw error;
  }
};
