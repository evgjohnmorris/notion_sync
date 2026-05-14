/**
 * Generated Tool: searchTool_0245
 * Domain: Search
 * ID: 0245
 */
exports.searchTool_0245 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0245:', error);
    throw error;
  }
};
