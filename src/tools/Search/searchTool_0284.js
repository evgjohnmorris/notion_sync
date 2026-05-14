/**
 * Generated Tool: searchTool_0284
 * Domain: Search
 * ID: 0284
 */
exports.searchTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0284:', error);
    throw error;
  }
};
