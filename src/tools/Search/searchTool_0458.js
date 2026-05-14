/**
 * Generated Tool: searchTool_0458
 * Domain: Search
 * ID: 0458
 */
exports.searchTool_0458 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0458:', error);
    throw error;
  }
};
