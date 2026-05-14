/**
 * Generated Tool: searchTool_0533
 * Domain: Search
 * ID: 0533
 */
exports.searchTool_0533 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0533:', error);
    throw error;
  }
};
