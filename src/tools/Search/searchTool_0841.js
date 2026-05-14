/**
 * Generated Tool: searchTool_0841
 * Domain: Search
 * ID: 0841
 */
exports.searchTool_0841 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0841:', error);
    throw error;
  }
};
