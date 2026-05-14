/**
 * Generated Tool: searchTool_0428
 * Domain: Search
 * ID: 0428
 */
exports.searchTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0428:', error);
    throw error;
  }
};
