/**
 * Generated Tool: searchTool_0378
 * Domain: Search
 * ID: 0378
 */
exports.searchTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0378:', error);
    throw error;
  }
};
