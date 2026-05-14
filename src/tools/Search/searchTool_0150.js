/**
 * Generated Tool: searchTool_0150
 * Domain: Search
 * ID: 0150
 */
exports.searchTool_0150 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0150:', error);
    throw error;
  }
};
