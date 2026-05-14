/**
 * Generated Tool: searchTool_0370
 * Domain: Search
 * ID: 0370
 */
exports.searchTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0370:', error);
    throw error;
  }
};
