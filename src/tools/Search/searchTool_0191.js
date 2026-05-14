/**
 * Generated Tool: searchTool_0191
 * Domain: Search
 * ID: 0191
 */
exports.searchTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0191:', error);
    throw error;
  }
};
