/**
 * Generated Tool: searchTool_0125
 * Domain: Search
 * ID: 0125
 */
exports.searchTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0125:', error);
    throw error;
  }
};
