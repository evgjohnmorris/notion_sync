/**
 * Generated Tool: searchTool_0166
 * Domain: Search
 * ID: 0166
 */
exports.searchTool_0166 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0166:', error);
    throw error;
  }
};
