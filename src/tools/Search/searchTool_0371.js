/**
 * Generated Tool: searchTool_0371
 * Domain: Search
 * ID: 0371
 */
exports.searchTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0371:', error);
    throw error;
  }
};
