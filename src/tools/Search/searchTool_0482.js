/**
 * Generated Tool: searchTool_0482
 * Domain: Search
 * ID: 0482
 */
exports.searchTool_0482 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0482:', error);
    throw error;
  }
};
