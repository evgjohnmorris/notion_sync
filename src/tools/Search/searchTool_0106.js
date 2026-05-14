/**
 * Generated Tool: searchTool_0106
 * Domain: Search
 * ID: 0106
 */
exports.searchTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0106:', error);
    throw error;
  }
};
