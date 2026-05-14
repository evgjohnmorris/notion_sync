/**
 * Generated Tool: searchTool_0155
 * Domain: Search
 * ID: 0155
 */
exports.searchTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0155:', error);
    throw error;
  }
};
