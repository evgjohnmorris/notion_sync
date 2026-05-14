/**
 * Generated Tool: searchTool_0328
 * Domain: Search
 * ID: 0328
 */
exports.searchTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0328:', error);
    throw error;
  }
};
