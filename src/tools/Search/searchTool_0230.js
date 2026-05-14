/**
 * Generated Tool: searchTool_0230
 * Domain: Search
 * ID: 0230
 */
exports.searchTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0230:', error);
    throw error;
  }
};
