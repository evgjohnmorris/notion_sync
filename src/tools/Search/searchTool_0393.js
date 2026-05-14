/**
 * Generated Tool: searchTool_0393
 * Domain: Search
 * ID: 0393
 */
exports.searchTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0393:', error);
    throw error;
  }
};
