/**
 * Generated Tool: searchTool_0819
 * Domain: Search
 * ID: 0819
 */
exports.searchTool_0819 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0819:', error);
    throw error;
  }
};
