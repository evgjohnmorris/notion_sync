/**
 * Generated Tool: searchTool_0392
 * Domain: Search
 * ID: 0392
 */
exports.searchTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0392:', error);
    throw error;
  }
};
