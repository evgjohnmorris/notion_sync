/**
 * Generated Tool: searchTool_0840
 * Domain: Search
 * ID: 0840
 */
exports.searchTool_0840 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0840:', error);
    throw error;
  }
};
