/**
 * Generated Tool: searchTool_0558
 * Domain: Search
 * ID: 0558
 */
exports.searchTool_0558 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0558:', error);
    throw error;
  }
};
