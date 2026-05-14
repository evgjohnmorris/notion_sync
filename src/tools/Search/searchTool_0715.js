/**
 * Generated Tool: searchTool_0715
 * Domain: Search
 * ID: 0715
 */
exports.searchTool_0715 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0715:', error);
    throw error;
  }
};
