/**
 * Generated Tool: searchTool_0749
 * Domain: Search
 * ID: 0749
 */
exports.searchTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0749:', error);
    throw error;
  }
};
