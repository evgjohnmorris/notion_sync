/**
 * Generated Tool: searchTool_0247
 * Domain: Search
 * ID: 0247
 */
exports.searchTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0247:', error);
    throw error;
  }
};
