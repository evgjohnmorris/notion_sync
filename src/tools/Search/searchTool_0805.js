/**
 * Generated Tool: searchTool_0805
 * Domain: Search
 * ID: 0805
 */
exports.searchTool_0805 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0805:', error);
    throw error;
  }
};
