/**
 * Generated Tool: searchTool_0192
 * Domain: Search
 * ID: 0192
 */
exports.searchTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0192:', error);
    throw error;
  }
};
