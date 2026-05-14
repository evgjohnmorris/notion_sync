/**
 * Generated Tool: searchTool_0950
 * Domain: Search
 * ID: 0950
 */
exports.searchTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0950:', error);
    throw error;
  }
};
