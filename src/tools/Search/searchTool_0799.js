/**
 * Generated Tool: searchTool_0799
 * Domain: Search
 * ID: 0799
 */
exports.searchTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0799:', error);
    throw error;
  }
};
