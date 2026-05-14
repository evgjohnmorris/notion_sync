/**
 * Generated Tool: searchTool_0630
 * Domain: Search
 * ID: 0630
 */
exports.searchTool_0630 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0630:', error);
    throw error;
  }
};
