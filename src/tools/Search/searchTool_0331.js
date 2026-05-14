/**
 * Generated Tool: searchTool_0331
 * Domain: Search
 * ID: 0331
 */
exports.searchTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0331:', error);
    throw error;
  }
};
