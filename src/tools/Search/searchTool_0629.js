/**
 * Generated Tool: searchTool_0629
 * Domain: Search
 * ID: 0629
 */
exports.searchTool_0629 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0629:', error);
    throw error;
  }
};
