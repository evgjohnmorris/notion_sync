/**
 * Generated Tool: searchTool_0262
 * Domain: Search
 * ID: 0262
 */
exports.searchTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0262:', error);
    throw error;
  }
};
