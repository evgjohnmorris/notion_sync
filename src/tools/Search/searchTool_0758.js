/**
 * Generated Tool: searchTool_0758
 * Domain: Search
 * ID: 0758
 */
exports.searchTool_0758 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0758:', error);
    throw error;
  }
};
