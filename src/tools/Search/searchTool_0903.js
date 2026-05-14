/**
 * Generated Tool: searchTool_0903
 * Domain: Search
 * ID: 0903
 */
exports.searchTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0903:', error);
    throw error;
  }
};
