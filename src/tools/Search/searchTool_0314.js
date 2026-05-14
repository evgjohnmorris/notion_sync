/**
 * Generated Tool: searchTool_0314
 * Domain: Search
 * ID: 0314
 */
exports.searchTool_0314 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0314:', error);
    throw error;
  }
};
