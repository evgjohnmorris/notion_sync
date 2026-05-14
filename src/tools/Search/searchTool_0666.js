/**
 * Generated Tool: searchTool_0666
 * Domain: Search
 * ID: 0666
 */
exports.searchTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0666:', error);
    throw error;
  }
};
