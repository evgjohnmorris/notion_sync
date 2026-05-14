/**
 * Generated Tool: searchTool_0547
 * Domain: Search
 * ID: 0547
 */
exports.searchTool_0547 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0547:', error);
    throw error;
  }
};
