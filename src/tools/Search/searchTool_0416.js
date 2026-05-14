/**
 * Generated Tool: searchTool_0416
 * Domain: Search
 * ID: 0416
 */
exports.searchTool_0416 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0416:', error);
    throw error;
  }
};
