/**
 * Generated Tool: searchTool_0408
 * Domain: Search
 * ID: 0408
 */
exports.searchTool_0408 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0408:', error);
    throw error;
  }
};
