/**
 * Generated Tool: searchTool_0009
 * Domain: Search
 * ID: 0009
 */
exports.searchTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0009:', error);
    throw error;
  }
};
