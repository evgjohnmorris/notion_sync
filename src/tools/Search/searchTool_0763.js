/**
 * Generated Tool: searchTool_0763
 * Domain: Search
 * ID: 0763
 */
exports.searchTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0763:', error);
    throw error;
  }
};
