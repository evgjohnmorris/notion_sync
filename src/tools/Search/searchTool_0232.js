/**
 * Generated Tool: searchTool_0232
 * Domain: Search
 * ID: 0232
 */
exports.searchTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0232:', error);
    throw error;
  }
};
