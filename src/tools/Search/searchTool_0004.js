/**
 * Generated Tool: searchTool_0004
 * Domain: Search
 * ID: 0004
 */
exports.searchTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0004:', error);
    throw error;
  }
};
