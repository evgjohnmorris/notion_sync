/**
 * Generated Tool: searchTool_0999
 * Domain: Search
 * ID: 0999
 */
exports.searchTool_0999 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0999:', error);
    throw error;
  }
};
