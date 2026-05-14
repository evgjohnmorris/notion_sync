/**
 * Generated Tool: searchTool_0770
 * Domain: Search
 * ID: 0770
 */
exports.searchTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0770:', error);
    throw error;
  }
};
