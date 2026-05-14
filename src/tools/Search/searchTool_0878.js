/**
 * Generated Tool: searchTool_0878
 * Domain: Search
 * ID: 0878
 */
exports.searchTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0878:', error);
    throw error;
  }
};
