/**
 * Generated Tool: searchTool_0225
 * Domain: Search
 * ID: 0225
 */
exports.searchTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0225:', error);
    throw error;
  }
};
