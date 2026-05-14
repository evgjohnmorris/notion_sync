/**
 * Generated Tool: searchTool_0276
 * Domain: Search
 * ID: 0276
 */
exports.searchTool_0276 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0276:', error);
    throw error;
  }
};
