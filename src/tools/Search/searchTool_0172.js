/**
 * Generated Tool: searchTool_0172
 * Domain: Search
 * ID: 0172
 */
exports.searchTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0172:', error);
    throw error;
  }
};
