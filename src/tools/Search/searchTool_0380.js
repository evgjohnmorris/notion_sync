/**
 * Generated Tool: searchTool_0380
 * Domain: Search
 * ID: 0380
 */
exports.searchTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0380:', error);
    throw error;
  }
};
