/**
 * Generated Tool: searchTool_0229
 * Domain: Search
 * ID: 0229
 */
exports.searchTool_0229 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0229:', error);
    throw error;
  }
};
