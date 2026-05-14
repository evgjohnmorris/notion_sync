/**
 * Generated Tool: searchTool_0850
 * Domain: Search
 * ID: 0850
 */
exports.searchTool_0850 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0850:', error);
    throw error;
  }
};
