/**
 * Generated Tool: searchTool_0257
 * Domain: Search
 * ID: 0257
 */
exports.searchTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0257:', error);
    throw error;
  }
};
