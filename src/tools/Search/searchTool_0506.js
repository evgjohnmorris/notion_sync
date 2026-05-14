/**
 * Generated Tool: searchTool_0506
 * Domain: Search
 * ID: 0506
 */
exports.searchTool_0506 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0506:', error);
    throw error;
  }
};
