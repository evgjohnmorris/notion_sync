/**
 * Generated Tool: searchTool_0113
 * Domain: Search
 * ID: 0113
 */
exports.searchTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0113:', error);
    throw error;
  }
};
